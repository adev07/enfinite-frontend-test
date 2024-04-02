import React from "react";
import Input from "@/components/formControls/input";

function Products() {
  return (
    <div className="container">
      <div className="grid grid-cols-8 items-center justify-center gap-[32px] rounded-lg bg-white px-4 py-2 ">
        <div className="col-span-1">
          <div class="w-[120px] h-[120px] rounded-full  border-[4px] overflow-hidden bg-gray-200 flex items-center justify-center">
            <img
              src="https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1-640x640.jpg"
              alt="User Profile Photo"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-4">
          <h2 className="font-semibold text-[16px] text-[#333333] opacity-70">
            Aditya Anand
          </h2>
          <p className="text-[14px] font-semibold text-[#333333] opacity-70">
            Your account is ready, you can now apply for services.
          </p>
        </div>
        <div className="col-span-3"></div>
      </div>
      <div className="mt-[18px] grid grid-cols-4 gap-4 bg-white px-4 py-4 rounded-lg">
        <div>
          <Input
            label={"First Name"}
            type="text"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <Input
            label={"Last Name"}
            type="text"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <Input label={"Email"} type="email" placeholder="Enter your email" />
        </div>
        <div>
          <Input
            label={"Date of Birth"}
            type="date"
            placeholder="Enter your date of birth"
          />
        </div>
        <div>
          <Input
            label={"Phone Number"}
            type="text"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <Input
            label={"Address"}
            type="text"
            placeholder="Enter your address"
          />
        </div>
        <div>
          <Input label={"City"} type="text" placeholder="Enter your city" />
        </div>
        <div>
          <Input label={"State"} type="text" placeholder="Enter your state" />
        </div>
        <div>
          <Input
            label={"Zip Code"}
            type="text"
            placeholder="Enter your zip code"
          />
        </div>
        <div>
          <Input
            label={"Country"}
            type="text"
            placeholder="Enter your country"
          />
        </div>
        <div>
          <Input
            label={"Education Level"}
            type="text"
            placeholder="Enter your education level"
          />
        </div>
        <div>
          <Input
            label={"Company Name"}
            type="text"
            placeholder="Enter your company name"
          />
        </div>
      </div>
      <button className="bg-[#000a1f] border border-[#000A1F] text-white rounded-lg px-4 py-2 mt-4 hover:bg-white hover:text-[#000A1F]">
        Save Changes
      </button>
    </div>
  );
}

export default Products;
