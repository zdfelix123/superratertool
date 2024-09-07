import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="text-4xl mt-[20vh]">
        <div>Welcome to Core Machine Learning Group</div>
        <div className="flex flex-row justify-center mt-[25vh]">
        {/* <div className="mr-3">
            <Link
              href="/roster"
              className={buttonVariants({ variant: "outline" })}
            >
              Roster
            </Link>
          </div> */}
          <div className="mr-3">
            <Link
              href="/srroster"
              className={buttonVariants({ variant: "outline" })}
            >
              Roster
            </Link>
          </div>
          <div>
            <Link
              href="/activeprojects"
              className={buttonVariants({ variant: "outline" })}
            >
              Active Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
