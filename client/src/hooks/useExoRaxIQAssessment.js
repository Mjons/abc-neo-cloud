import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

/**
 * Custom hook for submitting EXORAX IQ assessments to Supabase
 *
 * Features:
 * - UPSERT logic: Updates existing assessment if email exists, inserts if new
 * - Allows facility retakes with same email
 * - No .select() to avoid needing SELECT RLS policy
 * - Handles errors gracefully
 *
 * Usage:
 * const { mutate, isPending, isError, error } = useSubmitExoRaxIQAssessment();
 * mutate(assessmentData);
 */
export function useSubmitExoRaxIQAssessment() {
  return useMutation({
    mutationFn: async (assessmentData) => {
      const {
        facilityInfo,
        ratings,
        scores,
        quadrant
      } = assessmentData;

      // Prepare data for Supabase
      const dataToInsert = {
        email: facilityInfo.email,
        facility_name: facilityInfo.name,
        location: facilityInfo.location || null,
        target_mw: facilityInfo.targetMW || null,
        contact_name: facilityInfo.contactName,
        company: facilityInfo.company || null,
        ratings: ratings, // JSONB field
        overall_score: scores.overall,
        readiness_score: scores.readiness,
        scalability_score: scores.scalability,
        operational_score: scores.operational,
        quadrant: quadrant.label
      };

      // UPSERT: Insert or Update if email exists
      // Uses PostgreSQL's ON CONFLICT clause
      const { error } = await supabase
        .from("exoraxiq_assessments")
        .upsert(dataToInsert, {
          onConflict: 'email', // Use email as conflict target
          returning: 'minimal' // Don't return data (no SELECT policy needed)
        });

      if (error) {
        console.error('Assessment submission error:', error);
        throw new Error(error.message);
      }

      return { success: true };
    },
    // Callbacks handled in component
  });
}
