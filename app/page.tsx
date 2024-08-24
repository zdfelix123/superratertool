import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="text-4xl mt-[20vh]">
        <div>
          Welcome to Core Machine Learning Group
        </div>
        <div className="flex justify-center mt-[25vh]">
          <Link href="/roster" className={buttonVariants({ variant: "outline" })} >Roster</Link>
        </div>
      </div>
    </div>
  );
}
