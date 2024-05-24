import { MailCheck } from "lucide-react"

const RightMenu = () => {
  return (
    <div>
        <div className="md:hidden block">ham</div>
        <div><MailCheck size={30} className=" text-green-500 hover:text-yellow-300 cursor-pointer ease-in-out duration-500 transition-all" /></div>
    </div>
  )
}

export default RightMenu