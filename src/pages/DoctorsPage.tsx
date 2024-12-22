import CardDoctors from "@/components/card-dcotors"
import { doctors } from "@/lib/assets"

const DoctorsPage = () => {
  return <CardDoctors doctors={doctors}/>
}

export default DoctorsPage
