import Image from "next/image";
import { Button } from "@/components/ui/button";
import SolutionsMarketplace from "@/components/solutionmarket/landing"
import { redirect } from 'next/navigation';
export default function Home() {
  return (
    redirect('/auth')
  )
}
