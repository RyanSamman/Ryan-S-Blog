import React from "react"
import { Link } from "gatsby"

const brandIconStyle: React.CSSProperties = {
	backgroundColor: "#fff",
	border: "4px solid #000",
	width: "140px",
	height: "80px",
	textAlign: "center",
	paddingTop: "36px",
	fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
	color: "#000",
	fontWeight: 500,
	fontSize: "large",
}

const NavBar: React.FC = () => (
	<div className="mx-auto mt-3 flex justify-between text-white px-5 md:px-10" style={{ width:"100%", maxWidth: "var(--maxWidth-wrapper)" }} >

		<div className="brandIcon">
		<Link to="/blog"><div className="rounded-2xl stickout" style={brandIconStyle}>Ryan Samman</div></Link>
		</div>
		<div className="flex justify-items-end ">
			<p className="px-2 md:px-4 navbarText">
				<Link className="" to="/blog">Blog</Link>

			</p>
			<p className="px-2 md:px-4 navbarText">
				<a target="_blank" href="https://github.com/RyanSamman">Projects</a>
			</p>
			{/* <p className="px-2 md:px-4 navbarText">
				<Link className="" to="https://twitter.com/Ryan_Samman_">Contact</Link>
			</p> */}
		</div>
	</div>
)

export default NavBar

