import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { assets, specialityData } from "@/lib/assets";

export default function DoctorInfoForm() {
  const [photo, setPhoto] = useState<File | null>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(event.target.files[0]);
    }
  };
  console.log(photo);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Doctor Information Form</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="md:col-span-2 flex items-center gap-4">
            <img
              src={photo ? URL.createObjectURL(photo) : assets.upload_icon}
              className="size-24 border rounded-full bg-slate-300 object-cover border-slate-500"
              alt ="profile photo"
              height={50}
              width={50}
            />
            <div>
              {/* <Label htmlFor="photo">Photo of Doctor</Label> */}
              <Input id="photo" type="file" accept="image/*" onChange={handlePhotoChange} />
            </div>
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter doctor's name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter doctor's email" />
          </div>
          <div>
            <Label htmlFor="education">Education</Label>
            <Input id="education" placeholder="Enter doctor's education" />
          </div>
          <div>
            <Label htmlFor="address1">Address 1</Label>
            <Input id="address1" placeholder="Enter address line 1" />
          </div>
          <div>
            <Label htmlFor="address2">Address 2</Label>
            <Input id="address2" placeholder="Enter address line 2" />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="fees">Fees</Label>
            <Input id="fees" type="number" placeholder="Enter consultation fees" />
          </div>
          <div>
            <Label htmlFor="specialty">Specialty</Label>
            <Select>
              <SelectTrigger id="specialty">
                <SelectValue placeholder="Select a specialty" />
              </SelectTrigger>
              <SelectContent>
                {specialityData.map((data, id) => (
                  <SelectItem key={id} value={data.speciality}>
                    {data.speciality}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="experience">Years of Experience</Label>
            <Select>
              <SelectTrigger id="years-of-experience">
                <SelectValue placeholder="Select a years of Experience" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }).map((_, id) => (
                  <SelectItem key={id} value={`${id + " Years"}`}>
                    {`${id + " Years"}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="about">About Doctor</Label>
            <Textarea id="about" placeholder="Enter a brief description about the doctor" className="h-32" />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
