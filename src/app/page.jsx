import { connectDB } from "@/utils/mongoose"
import Books from "@/models/Books"
import PageRenderer from "@/components/PageRenderer"
import HeaderText from "@/components/HeaderText"


const loadBooks = async() => {
  connectDB()
  const books = await Books.find()
  return books
}

export default async function Home() {

  // some issues of Nextjs 13 dont let me put it like const b = await loadBooks(); so i used this line below
  const b = await JSON.parse(JSON.stringify(await loadBooks()));

  return (
    <div className="absolute w-full">
        <HeaderText />
        <PageRenderer b={b} />

    </div>
  )
}
