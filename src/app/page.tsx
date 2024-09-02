import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";

export default function Home() {
  console.log('Supabaseの取得', supabase)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello</p>
    </main>
  );
}
