import React from "react"
import "./SideBarFooter.css"
import SideBarLink from "../SideBarLink/SideBarLink"

function SideBarFooter() {
  return (
    <div className="sidebarfooter">
      <SideBarLink name="About" />
      <SideBarLink name="Press" />
      <SideBarLink name="Copyright" />
      <SideBarLink name="Contact us" />
      <SideBarLink name="Creators" />
      <br />
      <SideBarLink name="Advertise" />
      <SideBarLink name="Developers" />
      <SideBarLink name="Impressum" />
      <SideBarLink name="NetzDG Transparenzbericht" />
      <SideBarLink name="NetzDG Complaints" />
      <br />
      <br />
      <SideBarLink name="Terms" />
      <SideBarLink name="Privacy" />
      <SideBarLink name="Policy & Safety" />
      <SideBarLink name="Test new features" />
      <br />
      <br />
      <span>All prices include VAT</span>
      <br />
      <br />
      <br />
      <span className="sidebarfooter__copyright">&copy; 2019 YouTube, LLC</span>
    </div>
  )
}
export default SideBarFooter
