import React, { useState } from 'react';
import success from './../images/success.png';
import aims from './../images/Aims.jpg';

function Homepage() {
	const [modalDisplay, setModalDisplay] = useState("hidden");

	function onBurgerMenuClicked(){
		document.querySelector("#modal").style.animationName = "slideIn"
		setModalDisplay("");
	}

	function onModalOverlayClicked(){
		document.querySelector("#modal").style.animationName = "slideOut"
		setTimeout(() => {
			setModalDisplay("hidden");
		}, "180");
	}

	function onMenuItemClicked(tag){
	    if (tag == '#home') {
		    window.scrollTo({
		        top: document.querySelector(tag).offsetTop - 200,
		        left: 0,
		        behavior: 'smooth'
	      	})
	    } else if (tag == '#aboutus') {
	    	window.scrollTo({
		        top: document.querySelector(tag).offsetTop- 100,
		        left: 0,
		        behavior: 'smooth'
	    	})
	    } else if (tag == '#ourservices') {
		    window.scrollTo({
		        top: document.querySelector(tag).offsetTop - 100,
		        left: 0,
		        behavior: 'smooth'
		    })
	    } else if (tag == '#casestudies') {
		    window.scrollTo({
		        top: document.querySelector(tag).offsetTop - 100,
		        left: 0,
		        behavior: 'smooth'
		    })
	    }
	}

	return(
		<>
			<div className="min-[1100px]:px-[40px] px-[20px] py-[10px] w-[1200px] max-[1100px]:w-[80%] max-[800px]:w-[90%] max-[600px]:w-[100%] mx-[auto]">
				{/*Modal*/}
				<div 
					id="modalOverlay" 
					className={"w-[100%] bg-[#7f808080] fixed top-[0px] left-[0px] h-[100%] " + modalDisplay} 
					onClick={onModalOverlayClicked}>

					<div 
						style={{
							animationName: "slideIn",
							animationDuration: "0.2s"
						}}
						id="modal" 
						className={"w-[260px] bg-[#FFFFFF] fixed top-[0px] left-[0px] h-[100%] " + modalDisplay}>

						<div id="modalContent" className="p-[20px]">
							<div className="flex items-center mb-[40px]">
								<svg width="50" height="60" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.000305176 10.0115C0.000305176 4.7032 4.30351 0.399994 9.61179 0.399994H23.0679V19.2385C23.0679 24.5468 18.7647 28.85 13.4564 28.85H0.000305176V10.0115Z" fill="#1B1642"/>
								</svg>
								<span className="text-[#FFFFFF] ml-[-38px] font-bold text-[35px]">A</span>
								<span className="text-[30px] font-bold ml-[15px]">ims.</span>
							</div>
							<div className="text-[16px] font-medium">
								<div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('#home')}>Home</div>
								<div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('#aboutus')}>About Us</div>
								<div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('#ourservices')}>Our Services</div>
								<div className="mb-[15px] cursor-pointer" onClick={() => onMenuItemClicked('#casestudies')}>Case Studies</div>
								<a href="https://calendly.com/angelinvestormarketingservices" target="_blank">
									<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
										Contact Us
									</button>
								</a>
							</div>
						</div>

					</div>

				</div>

				{/*Header*/}
				<div id="header" className="flex items-center justify-between">
					<div className="flex items-center">
						<svg width="50" height="60" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.000305176 10.0115C0.000305176 4.7032 4.30351 0.399994 9.61179 0.399994H23.0679V19.2385C23.0679 24.5468 18.7647 28.85 13.4564 28.85H0.000305176V10.0115Z" fill="#1B1642"/>
						</svg>
						<span className="text-[#FFFFFF] ml-[-38px] font-bold text-[35px]">A</span>
						<span className="text-[30px] font-bold ml-[15px]">ims.</span>
					</div>
					{/* <div className="border-[#2F6AD9] border-[2px] border-solid p-[5px] rounded-[5px] min-[1000px]:hidden cursor-pointer" onClick={onBurgerMenuClicked}>
						<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" stroke-width="0"/>
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
							<g id="SVGRepo_iconCarrier"> <path d="M5 12H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 17H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> </g>
						</svg>
					</div> */}

					<div className="flex items-center text-[16px] font-medium max-[999px]:hidden">
						{/* <div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#home')}>Home</div>
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#aboutus')}>About Us</div>
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#ourservices')}>Our Services</div>
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#casestudies')}>Case Studies</div> */}
						<a href="https://calendly.com/angelinvestormarketingservices" target="_blank">
							<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
								Contact Us
							</button>
						</a>
					</div>
				</div>

				{/*fold 1*/}
				<div className="flex items-center">
					<div id="home" className="my-[100px] min-[1100px]:w-[50%]">
						<div className="max-[1000px]:text-[38px] text-[48px] text-[#1B1642] font-bold">Empowering your legal document needs with <span className="text-[#2F6AD9]">Karen.</span></div>
						<div className="text-[16px] leading-[32px] text-[#677788] my-[30px]">
						At Karen's Notary Public, we offer trusted and professional notary services in the heart of London, Ontario. With over a decade of experience and a passion for law, Karen is dedicated to ensuring your documents are notarized with precision and care.
						</div>
						<a href="https://calendly.com/angelinvestormarketingservices" target="_blank">
							<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff] max-[700px]:mx-auto block">
								Contact Us
							</button>
						</a>
					</div>
					<div className="w-[50%] min-[1100px]:block hidden">
						<img src={aims} />
					</div>
				</div>

				{/*fold 2*/}
				<div id="aboutus" className="text-center">
					<div className="text-[25px] font-bold">About Notary Services with Karen</div>
					<div className="text-[#677788] text-[16px] leading-[32px] my-[30px] max-w-[1000px] mx-auto">Karen provides precise and reliable notary services for all your legal document needs, including affidavits, statutory declarations, and other official documents, offering services in both English and French.</div>
					<div className="grid min-[1101px]:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-[20px] justify-center">
						<div className="col-span-2 rounded-[10px] p-[20px] border-solid border-[#eaeaea] border-[1px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="flex justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#377DFF" class="bi bi-person-fill" viewBox="0 0 16 16">
									<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
								</svg>
							</div>
							<div className="text-[18px] font-semibold leading-[28px] text-[#1E2022] mt-[20px]">Expert in Legal Documentation</div>
							<div className="text-[16px] text-[#677788] mt-[50px]">Whether you're dealing with Workplace Safety Insurance Board (WSIB) claims, Statutory Accident Benefits (SABS), landlord-tenant agreements, or Small Claims Court documents, Karen ensures that each document is processed accurately and according to legal standards.</div>
						</div>
						<div className="col-span-2 rounded-[10px] p-[20px] border-solid border-[#eaeaea] border-[1px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="flex justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#377DFF" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg>
							</div>
							<div className="text-[18px] font-semibold leading-[28px] text-[#1E2022] mt-[20px]">Your Trusted Notary Public</div>
							<div className="text-[16px] text-[#677788] mt-[50px]">Appointed by the Attorney General of Ontario, Karen offers notary services in English and French from her charming office in Wortley Village, London, ON.</div>
						</div>
						<div className="col-span-2 max-[1100px]:col-start-2 max-[767px]:col-start-1 rounded-[10px] p-[20px] border-solid border-[#eaeaea] border-[1px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="flex justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#377DFF" class="bi bi-people-fill" viewBox="0 0 16 16">
									<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
								</svg>
							</div>
							<div className="text-[18px] font-semibold leading-[28px] text-[#1E2022] mt-[20px]">Community-Focused and <br></br>Client-Centered</div>
							<div className="text-[16px] text-[#677788] mt-[20px]">As an accredited business with an A rating from the Better Business Bureau and an active member of the Law Society of Ontario, Paralegal Society of Ontario, Worldwide Women's Association, and Old South Business Association,  Karen is committed to maintaining the highest standards of service to both her profession and her community.</div>
						</div>
					</div>
				</div>

				{/*fold 3*/}
				<div id="ourservices" className="text-center">
					<div className="text-[32px] font-bold  my-[50px]">Our Services</div>
					<div className="grid min-[1100px]:grid-cols-3 min-[700px]:grid-cols-2 grid-cols-1 gap-[20px]">
						<div className="p-[20px] text-center rounded-[10px]">
							<svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#377DFF" class="bi bi-clipboard2-check-fill" viewBox="0 0 16 16">
								<path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
								<path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5m6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Certified True Copies</div>
							<div className="text-[#677788]">Creates certified true copies of documents like birth certificates and diplomas, ensuring they are accurate and match the originals.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#377DFF" class="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">
								<path d="M5.523 12.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572l-.035.012a.3.3 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548m2.455-1.647q-.178.037-.356.078a21 21 0 0 0 .5-1.05 12 12 0 0 0 .51.858q-.326.048-.654.114m2.525.939a4 4 0 0 1-.435-.41q.344.007.612.054c.317.057.466.147.518.209a.1.1 0 0 1 .026.064.44.44 0 0 1-.06.2.3.3 0 0 1-.094.124.1.1 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256M8.278 6.97c-.04.244-.108.524-.2.829a5 5 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.5.5 0 0 1 .145-.04c.013.03.028.092.032.198q.008.183-.038.465z"/>
								<path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.7 11.7 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.86.86 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.84.84 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.8 5.8 0 0 0-1.335-.05 11 11 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.24 1.24 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a20 20 0 0 1-1.062 2.227 7.7 7.7 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103"/>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Immigration and Citizenship Documents</div>
							<div className="text-[#677788]">Notarizes key documents for immigration, visa, and citizenship applications making sure they are legally valid.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto" fill="#377DFF" height="60px" width="60px" version="1.1" id="Layer_1" viewBox="0 0 512 512" stroke="#377DFF" stroke-width="12.8">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <g> <g> <circle cx="305.021" cy="430.298" r="8.17"/> </g> </g> <g> <g> <circle cx="337.702" cy="462.979" r="8.17"/> </g> </g> <g> <g> <path d="M389.447,495.66h-2.723v-51.745c0-31.769-23.779-58.07-54.468-62.088v-8.72c0-19.522-15.883-35.404-35.404-35.404H100.766 c-19.521,0-35.404,15.882-35.404,35.404v8.72c-30.689,4.018-54.468,30.319-54.468,62.088v51.745H8.17 c-4.512,0-8.17,3.657-8.17,8.17S3.658,512,8.17,512h381.277c4.512,0,8.17-3.657,8.17-8.17S393.959,495.66,389.447,495.66z M370.383,495.66H27.234v-51.745c0-25.529,20.769-46.298,46.298-46.298h32.681c4.512,0,8.17-3.657,8.17-8.17 c0-4.513-3.658-8.17-8.17-8.17H81.702v-8.17c0-10.511,8.553-19.064,19.064-19.064h196.085c10.511,0,19.064,8.553,19.064,19.064 v8.17H138.894c-4.512,0-8.17,3.657-8.17,8.17c0,4.513,3.658,8.17,8.17,8.17h185.191c25.529,0,46.298,20.769,46.298,46.298V495.66z "/> </g> </g> <g> <g> <path d="M471.149,119.83c-12.889,0-25.01,6.157-32.67,16.34H283.234v-32.681h2.723c4.512,0,8.17-3.657,8.17-8.17 s-3.658-8.17-8.17-8.17h-2.723V69.847c15.594-3.699,27.234-17.733,27.234-34.442C310.468,15.882,294.585,0,275.064,0H122.553 c-19.521,0-35.404,15.882-35.404,35.404c0,16.71,11.64,30.743,27.234,34.442v17.302h-2.723c-4.512,0-8.17,3.657-8.17,8.17 s3.658,8.17,8.17,8.17h2.723v114.383h-2.723c-4.512,0-8.17,3.657-8.17,8.17c0,4.513,3.658,8.17,8.17,8.17h2.723v17.302 c-15.594,3.699-27.234,17.733-27.234,34.442c0,19.522,15.883,35.404,35.404,35.404h152.511c19.521,0,35.404-15.882,35.404-35.404 c0-16.71-11.64-30.743-27.234-34.442v-17.302h2.723c4.512,0,8.17-3.657,8.17-8.17c0-4.513-3.658-8.17-8.17-8.17h-2.723v-65.362 h159.617c2.916,0,5.611-1.555,7.071-4.077c4.378-7.565,12.511-12.263,21.227-12.263c13.516,0,24.511,10.996,24.511,24.511 c0,13.515-10.995,24.511-24.511,24.511c-8.716,0-16.849-4.698-21.226-12.263c-1.46-2.523-4.155-4.077-7.071-4.077H307.745 c-4.512,0-8.17,3.657-8.17,8.17s3.658,8.17,8.17,8.17h130.734c7.66,10.183,19.781,16.34,32.67,16.34 c22.526,0,40.851-18.325,40.851-40.851S493.675,119.83,471.149,119.83z M294.128,285.957c0,10.511-8.553,19.064-19.064,19.064 H122.553c-10.511,0-19.064-8.553-19.064-19.064s8.553-19.064,19.064-19.064h152.511 C285.575,266.894,294.128,275.446,294.128,285.957z M266.894,103.489v114.383h-136.17V103.489H266.894z M130.723,87.149v-16.34 h136.17v16.34H130.723z M266.894,234.213v16.34h-136.17v-16.34H266.894z M275.064,54.468H122.553 c-10.511,0-19.064-8.553-19.064-19.064c0-10.511,8.553-19.064,19.064-19.064h152.511c10.511,0,19.064,8.553,19.064,19.064 C294.128,45.916,285.575,54.468,275.064,54.468z"/> </g> </g> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Wills and Power of Attorney</div>
							<div className="text-[#677788]">Assists with creating and notarizing legal wills and power of attorney documents, ensuring compliance with all legal requirements.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#377DFF" class="bi bi-ui-checks" viewBox="0 0 16 16">
								<path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Ontario Court Forms</div>
							<div className="text-[#677788]">Notarizes Ontario court forms, verifies identities, and applies seals to uphold legal compliance.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className='mx-auto' width="60px" height="60px" viewBox="0 0 28 28" version="1.1" fill="#377DFF" stroke="#377DFF">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> 
								<g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_signature_28_filled" fill="#377DFF" fill-rule="nonzero"> <path d="M16.4798956,21.0019578 L16.75,21 C17.9702352,21 18.6112441,21.5058032 19.4020627,22.7041662 L19.7958278,23.3124409 C20.1028266,23.766938 20.2944374,23.9573247 20.535784,24.0567929 C20.9684873,24.2351266 21.3271008,24.1474446 22.6440782,23.5133213 L23.0473273,23.3170319 C23.8709982,22.9126711 24.4330286,22.6811606 25.0680983,22.5223931 C25.4699445,22.4219316 25.8771453,22.6662521 25.9776069,23.0680983 C26.0780684,23.4699445 25.8337479,23.8771453 25.4319017,23.9776069 C25.0371606,24.0762922 24.6589465,24.2178819 24.1641364,24.4458997 L23.0054899,25.0032673 C21.4376302,25.7436944 20.9059009,25.8317321 19.964216,25.4436275 C19.3391237,25.1860028 18.9836765,24.813298 18.4635639,24.0180227 L18.2688903,23.7140849 C17.6669841,22.7656437 17.3640608,22.5 16.75,22.5 L16.5912946,22.5037584 C16.1581568,22.5299816 15.8777212,22.7284469 14.009281,24.1150241 C12.2670395,25.4079488 10.9383359,26.0254984 9.24864243,26.0254984 C7.18872869,26.0254984 5.24773367,25.647067 3.43145875,24.8905363 L6.31377803,24.2241784 C7.25769404,24.4250762 8.23567143,24.5254984 9.24864243,24.5254984 C10.5393035,24.5254984 11.609129,24.0282691 13.1153796,22.9104743 L14.275444,22.0545488 C15.5468065,21.1304903 15.8296113,21.016032 16.4798956,21.0019578 L16.4798956,21.0019578 Z M22.7770988,3.22208979 C24.4507223,4.8957133 24.4507566,7.60916079 22.7771889,9.28281324 L21.741655,10.3184475 C22.8936263,11.7199657 22.8521526,13.2053774 21.7811031,14.279556 L18.7800727,17.2805874 L18.7800727,17.2805874 C18.4870374,17.5733384 18.0121637,17.573108 17.7194126,17.2800727 C17.4266616,16.9870374 17.426892,16.5121637 17.7199273,16.2194126 L20.7188969,13.220444 C21.2039571,12.7339668 21.2600021,12.1299983 20.678941,11.3818945 L10.0845437,21.9761011 C9.78635459,22.2743053 9.41036117,22.482705 8.99944703,22.5775313 L2.91864463,23.9807934 C2.37859061,24.1054212 1.89457875,23.6214094 2.0192066,23.0813554 L3.42247794,17.0005129 C3.51729557,16.5896365 3.72566589,16.2136736 4.0238276,15.9154968 L16.7165019,3.22217992 C18.3900415,1.54855555 21.1034349,1.54851059 22.7770988,3.22208979 Z" id="🎨-Color"> </path> </g> </g> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Identity and Signature Verifications</div>
							<div className="text-[#677788]">Provides verification of identities and signatures for security clearances, life certificates, and other essential documents.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto" height="60px" width="60px" version="1.1" id="_x32_" viewBox="0 0 512 512" fill="#377DFF" stroke="#377DFF">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <g> <path class="st0" d="M255.366,141.046c-7.4,3.583-14.732,8.548-21.533,15.357c-34.091,34.098-65.081,65.088-65.081,65.088 l0.013,0.02c-0.185,0.186-0.371,0.338-0.557,0.53c-8.824,8.831-9.174,22.909-1.025,32.146c0.323,0.371,0.668,0.736,1.025,1.086 c9.161,9.174,24.036,9.196,33.232,0l35.797-35.797c6.176,2.263,12.248,3.583,18.074,4.243c7.937,0.88,15.392,0.55,22.022-0.385 c16.162-2.29,14.47-1.623,23.844-4.704c9.353-3.068,19.862-9.354,19.862-9.354l6.362,6.355 c0.701,0.681,16.919,16.925,25.192,25.185c1.465,1.471,2.709,2.682,3.542,3.549c0.956,0.997,2.022,1.719,2.682,2.682l41.278,41.279 c11.898-13.35,25.488-33.232,23.81-56.058L320.763,129.14C320.763,129.14,285.062,126.589,255.366,141.046z"/> <path class="st0" d="M261.115,394.362c-9.134-9.147-23.961-9.147-33.101,0l-6.794,6.794c9.119-9.132,9.112-23.926-0.021-33.066 c-9.14-9.126-23.947-9.126-33.087,0.007c9.14-9.133,9.14-23.94,0-33.087c-9.133-9.148-23.947-9.133-33.087,0 c9.14-9.133,9.14-23.947,0-33.095c-9.134-9.132-23.947-9.132-33.088,0.014l-20.46,20.453c-9.14,9.147-9.14,23.947,0,33.094 c9.133,9.134,23.941,9.134,33.08,0c-9.14,9.134-9.14,23.947,0,33.087c9.147,9.133,23.954,9.133,33.094,0 c-9.14,9.133-9.14,23.941,0,33.088c9.14,9.133,23.947,9.133,33.088,0l6.802-6.809c-9.119,9.147-9.113,23.94,0.02,33.081 c9.14,9.132,23.947,9.132,33.088,0l20.467-20.468C270.248,418.302,270.248,403.495,261.115,394.362z"/> <path class="st0" d="M507.987,178.28L387.543,57.822c-5.351-5.337-14.002-5.337-19.339,0l-38.631,38.63 c-5.337,5.337-5.337,13.989,0,19.333l120.458,120.451c5.33,5.35,13.996,5.35,19.326,0l38.63-38.638 C513.338,192.276,513.338,183.624,507.987,178.28z M473.655,204.992c-5.75,5.736-15.048,5.736-20.777,0 c-5.735-5.743-5.735-15.041,0-20.777c5.729-5.736,15.027-5.736,20.777,0C479.391,189.951,479.384,199.249,473.655,204.992z"/> <path class="st0" d="M182.417,99.864l-38.624-38.63c-5.336-5.337-13.995-5.337-19.332,0L4.003,181.691 c-5.337,5.323-5.337,13.989,0,19.319l38.631,38.644c5.33,5.331,14.002,5.331,19.325,0l120.458-120.458 C187.761,113.859,187.761,105.207,182.417,99.864z M59.118,208.403c-5.736,5.729-15.04,5.729-20.777,0 c-5.735-5.742-5.735-15.041,0-20.777c5.736-5.735,15.041-5.735,20.777,0C64.854,193.362,64.854,202.66,59.118,208.403z"/> <path class="st0" d="M397.528,312.809l-7.468-7.482l-72.509-72.509l-4.883,2.166l-5.316,1.919l-0.384,0.117 c-0.936,0.296-9.684,2.971-26.932,5.412c-9.12,1.273-18.156,1.431-26.904,0.434c-3.459-0.385-6.898-0.95-10.296-1.692 l-27.757,27.744c-16.678,16.678-43.836,16.678-60.514,0c-0.585-0.591-1.149-1.19-1.671-1.781l-0.179-0.2 c-10.529-11.939-13.204-28.28-8.252-42.461l10.673-16.609l-0.02-0.02l65.081-65.074c2.647-2.641,5.426-5.103,8.314-7.428 c-20.281-3.982-37.296-2.806-37.296-2.806L88.093,235.679c-1.389,18.988,11.651,39.799,20.928,51.952 c16.692-15.963,43.239-15.756,59.641,0.654c6.107,6.1,9.952,13.617,11.574,21.498c7.895,1.637,15.406,5.475,21.513,11.582 c6.107,6.114,9.952,13.631,11.575,21.519c7.888,1.623,15.412,5.46,21.513,11.568c4.078,4.078,7.152,8.783,9.222,13.817 c11.1-0.137,22.242,4.016,30.688,12.455c16.65,16.636,16.643,43.733,0,60.363l-6.809,6.822l3.411,3.412 c9.148,9.147,23.954,9.147,33.095,0c9.14-9.134,9.14-23.947,0-33.088l6.808,6.83c9.147,9.133,23.947,9.133,33.087,0 c9.14-9.147,9.147-23.954,0-33.101c9.147,9.147,23.947,9.147,33.087,0c9.134-9.126,9.154-23.94,0-33.088 c9.154,9.148,23.954,9.148,33.088,0c9.147-9.132,9.147-23.947,0-33.08L397.528,312.809z"/> </g> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Real Estate Closings</div>
							<div className="text-[#677788]">Offers expert notarization for real estate transactions, ensuring a smooth, secure, and legally binding process.</div>
						</div>
					</div>
				</div>

				{/*fold 4*/}
				<div id="casestudies" className="">
					<div className="flex items-start my-[70px]">
						<div className="">
							<div className="text-[32px] text-[#1B1642] font-bold">Karen’s Success Stories</div>
							<div className="text-[16px] text-[#677788] mt-[20px]">Karen's dedication to law and service has made a significant impact on the community and beyond. With a strong foundation in legal expertise and a passion for helping others, Karen continues to make a difference through her notary services.</div>
						</div>
						<img className="w-[50%] h-[25%] rounded-[20px] ml-[40px] max-[1000px]:hidden" src={success} alt="Success Stories"/>
					</div>
					<div className="grid min-[700px]:grid-cols-2 grid-cols-1 mt-[50px] gap-[30px] text-center">
						<div className="border-solid border-[#eaeaea] border-[1px] p-[20px] rounded-[10px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="text-[#377DFF] text-[32px] mb-[20px]">
								<span>30</span>
								<span className='text-[40px]'>+</span>
								<div className='text-[20px]'>Years of Legal Experience</div>
							</div>
							<div className="text-[16px] text-[#677788] leading-[30px]">Karen brings over 30 years of experience in the legal field, from private investigation to paralegal services, ensuring that each client receives knowledgeable and reliable assistance.</div>
						</div>
						<div className="border-solid border-[#eaeaea] border-[1px] p-[20px] rounded-[10px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="text-[#377DFF] text-[32px] mb-[20px]">
								<span>1,000</span>
								<span className='text-[40px]'>+</span>
								<div className='text-[20px]'>Documents Notarized</div>
							</div>
							<div className="text-[16px] text-[#677788] leading-[30px]">Since becoming a Notary Public, Karen has successfully notarized over 1,000 documents, providing essential services for individuals, families, and businesses in London, ON, and surrounding areas.</div>
						</div>
						<div className="border-solid border-[#eaeaea] border-[1px] p-[20px] rounded-[10px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="text-[#377DFF] text-[32px] mb-[20px]">
								<span>100</span>
								<span className='text-[40px]'>+</span>
								<div className='text-[20px]'>Trusted Clients</div>
							</div>
							<div className="text-[16px] text-[#677788] leading-[30px]">Karen’s practice, accredited by the Better Business Bureau with an A rating, has gained the trust of hundreds of clients. Her reputation for accuracy, integrity, and professionalism sets her apart.</div>
						</div>
						<div className="border-solid border-[#eaeaea] border-[1px] p-[20px] rounded-[10px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="text-[#377DFF] text-[32px] mb-[20px]">
								<span>Community Engagement</span>
								{/* <span className='text-[40px]'>+</span> */}
								{/* <div className='text-[20px]'>Years of Legal Experience</div> */}
							</div>
							<div className="text-[16px] text-[#677788] leading-[30px]">Karen brings over 30 years of experience in the legal field, from private investigation to paralegal services, ensuring that each client receives knowledgeable and reliable assistance.</div>
						</div>
					</div>
				</div>

				{/*fold 5*/}
				<div className="text-center mt-[100px]">
					<div className="font-bold text-[32px]">Ready to Meet Your Notary Needs?</div>
					<div className="text-[16px] font-medium text-[#677788] my-[30px]">Get in touch with Karen today and experience reliable, professional notary services tailored to your needs.</div>
					<a href="https://calendly.com/angelinvestormarketingservices" target="_blank">
						<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
							Contact Us
						</button>
					</a>
				</div>

			</div>
			{/* <hr className="my-[30px] w-[100%] border-[#67778870] border-[1px] border-solid"/>
			<div className="px-[20px] py-[10px] w-[1200px] max-[1100px]:w-[80%] max-[800px]:w-[90%] max-[600px]:w-[100%] mx-[auto]">
				<div className="flex items-center text-[16px] font-medium justify-end">
					<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#home')}>Home</div>
					<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#aboutus')}>About Us</div>
					<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#ourservices')}>Our Services</div>
					<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#casestudies')}>Case Studies</div>
					<a href="https://calendly.com/angelinvestormarketingservices" target="_blank">
						<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
							Contact Us
						</button>
					</a>
				</div>
			</div> */}
		</>
	)
}

export default Homepage;
