import Image from "next/image";
import { Button } from "@/components/ui/button";
import SolutionsMarketplace from "@/components/solutionmarket/landing"
export default function Home() {
  return (
    <div className="px-8 py-6">
      <SolutionsMarketplace />
    </div>
  );
}
