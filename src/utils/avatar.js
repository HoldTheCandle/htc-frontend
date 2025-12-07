// src/utils/avatar.js
import { supabase } from "@/supabaseClient";

export function resolveAvatar(userId) {
  if (!userId) return null;

  // URL pública directa (archivo sin extensión)
  const { data } = supabase.storage
    .from("avatars")
    .getPublicUrl(userId);

  return data?.publicUrl || null;
}


