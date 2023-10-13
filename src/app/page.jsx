import LandingPage from "@/components/LandingPage";

export default async function Home() {

  // some issues of Nextjs 13 dont let me put it like const b = await loadBooks(); so i used this line below

  return (
    <div className="absolute w-full">
        <LandingPage />
    </div>
  )
}
