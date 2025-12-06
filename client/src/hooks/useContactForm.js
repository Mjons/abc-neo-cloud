import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export function useContactForm() {
  return useMutation({
    mutationFn: async (data) => {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          email: data.email,
          message: data.message,
        });

      if (error) {
        // Check if it's a duplicate email error (unique constraint violation)
        if (error.code === "23505" && error.message.includes("email")) {
          throw new Error("DUPLICATE_EMAIL");
        }
        throw new Error(error.message);
      }

      return { success: true };
    },
  });
}

