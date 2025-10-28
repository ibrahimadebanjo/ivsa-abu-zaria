import { Link } from "react-router-dom"
import aboutImage from "../assets/ivsa2.jpeg"
const About = () => {
  const presidents = [
"1. Abdulfatah Tayib Umar (DVM) 2018/2019",
"2. Mukhtar Yunusa Zuhair (DVM) 2019/2020",
"3. Aliyu Rabi'u Umar 2021/2022",
"4. Muhammad Abubakar Mande 2023/2024",
"5. Abdullahi Abiola Akingbade 2024/2025"
  ]
  const goals = [
  "1. Advance animal welfare and veterinary education",
  "2. Encourage cooperation among Veterinary students worldwide",
  "3. Provide learning and exchange opportunities beyond the classroom."
  ];
 const membership = [
  "1. Purchase and fill out the membership form",
  "2. Attend Orientation",
  "3. Complete interview",
  "4. Pay for membership declaration form",
  "5. Participate in IVSA activities"
 ]
  return (

    <div className="flex flex-col md:flex-row justify-between gap-3 items-center mb-10">
      <div className="flex flex-col md:w-[70%] bg-blue-100 p-6">
<h1 className="text-blue-500 text-2xl">ABOUT IVSA</h1>

<p className="text-slate-600 mt-1 mb-2 text-sm">The International Veterinary Students' Association [IVSA] is a global non-profit organization run by veterinary students in over 65 countries with more than 40,000 members.
  founded in 1951, IVSA aims to benefit both animals and humans by promoting international veterinary education, skll exchange, and collaboration.
</p>

<h2 className="text-blue-500 text-2xl">IVSA Nigeria</h2>
<p className="text-slate-600 mt-3 mb-3 text-sm">IVSA Nigeria become an official National Member Organization [MO] on December 17, 2017, following its approval at the IVSA General Assembly in South Africa.
  It enables Nigerian Veterinary Students' to participate in IVSA's global programs exchanges, congresses, and educational initiatives while promoting the association's core goals:
</p>
<ul className="text-slate-600 mb-1 text-sm">
 {goals.map((goal,i) => 
 (
  <li key={i}>{goal}</li>
)
  )}
</ul>

     </div>
     {/* next col */}
     <div className="flex flex-col">
      <div>
        <img src={aboutImage} alt="" />
      </div>
      <div className="flex flex-row gap-2">
<div className="bg-blue-100 p-3 border border-blue-600">
<h2 className="text-blue-500 text-lg">How To Become a Member</h2>
<ul className="text-slate-600">
 {membership.map((process,i) => 
 (
  <li key={i} className="mt-2">{process} </li>
)
  )}
</ul>
</div>
<div className="bg-blue-100 p-3 border border-blue-600">
  <h2  className="text-blue-500 text-lg">IVSA ABU Past Presidents</h2>
<ul className="text-slate-600">
 {presidents.map((president,i) => 
 (
  <li key={i}>{president}</li>
)
  )}
</ul>
</div>
      </div>
     </div>
    </div>

  )
}

export default About