"use client"
import React from "react";
import { useRouter } from "next/navigation";
import {Tabs, Tab} from "@nextui-org/react";

export default function Navbar() {
  const router = useRouter();
  
  const handleTabChange =(newTab)=>{
    router.push(`/${newTab}`);
  }
  
  return (
    <nav className="flex w-full flex-col mt-8">
      <Tabs 
        aria-label="Options"         
        selectedKey={React.key}
        onSelectionChange={handleTabChange}
        className="mx-auto"
        size="lg"
        variant="light"
        color="warning"
        radius="full"
      >
        <Tab key="" title="Home" >
          
        </Tab>
        {/* <Tab key="about" title="About">
          
        </Tab> */}
        <Tab key="menu" title="Menu">
          
        </Tab>
        
        <Tab key="contact" title="Contact">
          
        </Tab>
        

      </Tabs>
    </nav>  
  );
}