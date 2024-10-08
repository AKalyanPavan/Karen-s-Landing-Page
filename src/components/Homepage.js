import React, { useState } from 'react';
import success from './../images/success.jpg';
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
		        top: document.querySelector(tag).offsetTop - 100,
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
			{/*Header*/}
			<div id="header" className="min-[500px]:flex items-center justify-between sticky top-[0px] bg-[#ffffff] py-[20px] min-[1100px]:px-[40px] px-[20px] py-[10px] w-[1200px] max-[1100px]:w-[80%] max-[800px]:w-[90%] max-[600px]:w-[100%] mx-[auto]"> 
				<div className="cursor-pointer" onClick={() => onMenuItemClicked('#home')}>
					<svg className="max-[500px]:mx-auto min-[500px]:mt-[20px]" width="295" height="76" viewBox="0 0 295 76" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.245728 23.8205C0.245728 11.1904 12.8882 0.951706 28.4836 0.951706H68.0167V45.7744C68.0167 58.4044 55.3742 68.6431 39.7788 68.6431H0.245728V23.8205Z" fill="#1B1642"/>
						<path d="M35.9854 39H29.2178L21.4419 27.9941L18.9297 30.5747V39H13.7515V13.8096H18.9297V24.1831L28.6538 13.8096H35.4556L25.1333 24.1831L35.9854 39Z" fill="white"/>
						<path d="M53.1152 54.3848C51.7253 55.2393 50.0163 55.6665 47.9883 55.6665C44.6501 55.6665 41.9157 54.5101 39.7852 52.1973C37.5635 49.873 36.4526 46.6943 36.4526 42.6611C36.4526 38.5824 37.5749 35.3125 39.8193 32.8516C42.0638 30.3906 45.0317 29.1602 48.7231 29.1602C51.9246 29.1602 54.4938 29.9748 56.4307 31.604C58.3789 33.2218 59.4954 35.2441 59.7803 37.6709H54.6021C54.2033 35.9505 53.2292 34.7485 51.6797 34.0649C50.8138 33.689 49.8511 33.501 48.7915 33.501C46.7635 33.501 45.0944 34.27 43.7842 35.8081C42.4854 37.3348 41.8359 39.6362 41.8359 42.7124C41.8359 45.8114 42.5423 48.0046 43.9551 49.292C45.3678 50.5794 46.9743 51.2231 48.7744 51.2231C50.5404 51.2231 51.9873 50.7161 53.1152 49.7021C54.2432 48.6768 54.9382 47.3381 55.2002 45.686H49.3726V41.4819H59.8657V55H56.3794L55.8496 51.8555C54.8356 53.0518 53.9242 53.8949 53.1152 54.3848Z" fill="white"/>
						<path d="M179.527 32.4727C178.336 33.2051 176.871 33.5713 175.133 33.5713C172.271 33.5713 169.928 32.5801 168.102 30.5977C166.197 28.6055 165.245 25.8809 165.245 22.4238C165.245 18.9277 166.207 16.125 168.131 14.0156C170.055 11.9062 172.599 10.8516 175.763 10.8516C178.507 10.8516 180.709 11.5498 182.369 12.9463C184.039 14.333 184.996 16.0664 185.24 18.1465H180.802C180.46 16.6719 179.625 15.6416 178.297 15.0557C177.555 14.7334 176.729 14.5723 175.821 14.5723C174.083 14.5723 172.652 15.2314 171.529 16.5498C170.416 17.8584 169.859 19.8311 169.859 22.4678C169.859 25.124 170.465 27.0039 171.676 28.1074C172.887 29.2109 174.264 29.7627 175.807 29.7627C177.32 29.7627 178.561 29.3281 179.527 28.459C180.494 27.5801 181.09 26.4326 181.314 25.0166H176.319V21.4131H185.313V33H182.325L181.871 30.3047C181.002 31.3301 180.221 32.0527 179.527 32.4727ZM189.898 18.7617C191.002 17.3555 192.896 16.6523 195.582 16.6523C197.33 16.6523 198.883 16.999 200.24 17.6924C201.598 18.3857 202.276 19.6943 202.276 21.6182V28.9424C202.276 29.4502 202.286 30.0654 202.306 30.7881C202.335 31.335 202.418 31.7061 202.555 31.9014C202.691 32.0967 202.896 32.2578 203.17 32.3848V33H198.629C198.502 32.6777 198.414 32.375 198.365 32.0918C198.316 31.8086 198.277 31.4863 198.248 31.125C197.672 31.75 197.008 32.2822 196.256 32.7217C195.357 33.2393 194.342 33.498 193.209 33.498C191.764 33.498 190.567 33.0879 189.62 32.2676C188.683 31.4375 188.214 30.2656 188.214 28.752C188.214 26.7891 188.971 25.3682 190.484 24.4893C191.314 24.0107 192.535 23.6689 194.146 23.4639L195.567 23.2881C196.339 23.1904 196.891 23.0684 197.223 22.9219C197.818 22.668 198.116 22.2725 198.116 21.7354C198.116 21.0811 197.887 20.6318 197.428 20.3877C196.979 20.1338 196.314 20.0068 195.436 20.0068C194.449 20.0068 193.751 20.251 193.341 20.7393C193.048 21.1006 192.853 21.5889 192.755 22.2041H188.727C188.814 20.8076 189.205 19.6602 189.898 18.7617ZM193.004 29.9824C193.395 30.3047 193.873 30.4658 194.439 30.4658C195.338 30.4658 196.163 30.2021 196.915 29.6748C197.677 29.1475 198.072 28.1855 198.102 26.7891V25.2363C197.838 25.4023 197.569 25.5391 197.296 25.6465C197.032 25.7441 196.666 25.8369 196.197 25.9248L195.26 26.1006C194.381 26.2568 193.751 26.4473 193.37 26.6719C192.726 27.0527 192.403 27.6436 192.403 28.4443C192.403 29.1572 192.604 29.6699 193.004 29.9824ZM210.509 35.7979C210.958 36.1787 211.715 36.3691 212.779 36.3691C214.283 36.3691 215.289 35.8662 215.797 34.8604C216.129 34.2158 216.295 33.1318 216.295 31.6084V30.583C215.895 31.2666 215.465 31.7793 215.006 32.1211C214.176 32.7559 213.097 33.0732 211.769 33.0732C209.718 33.0732 208.077 32.3555 206.847 30.9199C205.626 29.4746 205.016 27.5215 205.016 25.0605C205.016 22.6875 205.606 20.6953 206.788 19.084C207.97 17.4629 209.645 16.6523 211.812 16.6523C212.613 16.6523 213.312 16.7744 213.907 17.0186C214.923 17.4385 215.743 18.21 216.368 19.333V17.0332H220.426V32.1797C220.426 34.2402 220.079 35.793 219.386 36.8379C218.194 38.6348 215.909 39.5332 212.53 39.5332C210.489 39.5332 208.824 39.1328 207.535 38.332C206.246 37.5312 205.533 36.335 205.396 34.7432H209.938C210.055 35.2314 210.245 35.583 210.509 35.7979ZM209.806 27.5508C210.372 28.8984 211.388 29.5723 212.853 29.5723C213.829 29.5723 214.654 29.2061 215.328 28.4736C216.002 27.7314 216.339 26.5547 216.339 24.9434C216.339 23.4297 216.017 22.2773 215.372 21.4863C214.737 20.6953 213.883 20.2998 212.809 20.2998C211.344 20.2998 210.333 20.9883 209.776 22.3652C209.483 23.0977 209.337 24.001 209.337 25.0752C209.337 26.0029 209.493 26.8281 209.806 27.5508ZM231.852 20.124C230.436 20.124 229.464 20.7246 228.937 21.9258C228.663 22.5605 228.526 23.3711 228.526 24.3574V33H224.366V17.0625H228.395V19.3916C228.932 18.5713 229.439 17.9805 229.918 17.6191C230.777 16.9746 231.866 16.6523 233.185 16.6523C234.835 16.6523 236.183 17.0869 237.228 17.9561C238.282 18.8154 238.81 20.2461 238.81 22.248V33H234.532V23.2881C234.532 22.4482 234.42 21.8037 234.195 21.3545C233.785 20.5342 233.004 20.124 231.852 20.124ZM256.344 28.3125C256.236 29.2598 255.743 30.2217 254.864 31.1982C253.497 32.751 251.583 33.5273 249.122 33.5273C247.091 33.5273 245.299 32.873 243.746 31.5645C242.193 30.2559 241.417 28.127 241.417 25.1777C241.417 22.4141 242.115 20.2949 243.512 18.8203C244.918 17.3457 246.739 16.6084 248.976 16.6084C250.304 16.6084 251.5 16.8574 252.564 17.3555C253.629 17.8535 254.508 18.6396 255.201 19.7139C255.826 20.6611 256.231 21.7598 256.417 23.0098C256.524 23.7422 256.568 24.7969 256.549 26.1738H245.621C245.68 27.7754 246.183 28.8984 247.13 29.543C247.706 29.9434 248.399 30.1436 249.21 30.1436C250.069 30.1436 250.768 29.8994 251.305 29.4111C251.598 29.1475 251.856 28.7812 252.081 28.3125H256.344ZM252.213 23.4199C252.145 22.3164 251.808 21.4814 251.202 20.915C250.606 20.3389 249.864 20.0508 248.976 20.0508C248.009 20.0508 247.257 20.3535 246.72 20.959C246.192 21.5645 245.86 22.3848 245.724 23.4199H252.213ZM246.793 14.8799L249.605 10.5H254.264L249.811 14.8799H246.793Z" fill="#1B1642"/>
						<path d="M94.416 34H88.6152L81.9502 24.5664L79.7969 26.7783V34H75.3584V12.4082H79.7969V21.2998L88.1318 12.4082H93.9619L85.1143 21.2998L94.416 34ZM97.2285 19.7617C98.332 18.3555 100.227 17.6523 102.912 17.6523C104.66 17.6523 106.213 17.999 107.57 18.6924C108.928 19.3857 109.606 20.6943 109.606 22.6182V29.9424C109.606 30.4502 109.616 31.0654 109.636 31.7881C109.665 32.335 109.748 32.7061 109.885 32.9014C110.021 33.0967 110.227 33.2578 110.5 33.3848V34H105.959C105.832 33.6777 105.744 33.375 105.695 33.0918C105.646 32.8086 105.607 32.4863 105.578 32.125C105.002 32.75 104.338 33.2822 103.586 33.7217C102.688 34.2393 101.672 34.498 100.539 34.498C99.0938 34.498 97.8975 34.0879 96.9502 33.2676C96.0127 32.4375 95.5439 31.2656 95.5439 29.752C95.5439 27.7891 96.3008 26.3682 97.8145 25.4893C98.6445 25.0107 99.8652 24.6689 101.477 24.4639L102.897 24.2881C103.669 24.1904 104.221 24.0684 104.553 23.9219C105.148 23.668 105.446 23.2725 105.446 22.7354C105.446 22.0811 105.217 21.6318 104.758 21.3877C104.309 21.1338 103.645 21.0068 102.766 21.0068C101.779 21.0068 101.081 21.251 100.671 21.7393C100.378 22.1006 100.183 22.5889 100.085 23.2041H96.0566C96.1445 21.8076 96.5352 20.6602 97.2285 19.7617ZM100.334 30.9824C100.725 31.3047 101.203 31.4658 101.77 31.4658C102.668 31.4658 103.493 31.2021 104.245 30.6748C105.007 30.1475 105.402 29.1855 105.432 27.7891V26.2363C105.168 26.4023 104.899 26.5391 104.626 26.6465C104.362 26.7441 103.996 26.8369 103.527 26.9248L102.59 27.1006C101.711 27.2568 101.081 27.4473 100.7 27.6719C100.056 28.0527 99.7334 28.6436 99.7334 29.4443C99.7334 30.1572 99.9336 30.6699 100.334 30.9824ZM121.354 21.8857C119.675 21.8857 118.547 22.4326 117.971 23.5264C117.648 24.1416 117.487 25.0889 117.487 26.3682V34H113.283V18.0332H117.268V20.8164C117.912 19.752 118.474 19.0244 118.952 18.6338C119.733 17.9795 120.749 17.6523 121.999 17.6523C122.077 17.6523 122.141 17.6572 122.189 17.667C122.248 17.667 122.37 17.6719 122.556 17.6816V21.959C122.292 21.9297 122.058 21.9102 121.853 21.9004C121.647 21.8906 121.481 21.8857 121.354 21.8857ZM138.684 29.3125C138.576 30.2598 138.083 31.2217 137.204 32.1982C135.837 33.751 133.923 34.5273 131.462 34.5273C129.431 34.5273 127.639 33.873 126.086 32.5645C124.533 31.2559 123.757 29.127 123.757 26.1777C123.757 23.4141 124.455 21.2949 125.852 19.8203C127.258 18.3457 129.079 17.6084 131.315 17.6084C132.644 17.6084 133.84 17.8574 134.904 18.3555C135.969 18.8535 136.848 19.6396 137.541 20.7139C138.166 21.6611 138.571 22.7598 138.757 24.0098C138.864 24.7422 138.908 25.7969 138.889 27.1738H127.961C128.02 28.7754 128.522 29.8984 129.47 30.543C130.046 30.9434 130.739 31.1436 131.55 31.1436C132.409 31.1436 133.107 30.8994 133.645 30.4111C133.938 30.1475 134.196 29.7812 134.421 29.3125H138.684ZM134.553 24.4199C134.484 23.3164 134.147 22.4814 133.542 21.915C132.946 21.3389 132.204 21.0508 131.315 21.0508C130.349 21.0508 129.597 21.3535 129.06 21.959C128.532 22.5645 128.2 23.3848 128.063 24.4199H134.553ZM149.23 21.124C147.814 21.124 146.843 21.7246 146.315 22.9258C146.042 23.5605 145.905 24.3711 145.905 25.3574V34H141.745V18.0625H145.773V20.3916C146.311 19.5713 146.818 18.9805 147.297 18.6191C148.156 17.9746 149.245 17.6523 150.563 17.6523C152.214 17.6523 153.562 18.0869 154.606 18.9561C155.661 19.8154 156.188 21.2461 156.188 23.248V34H151.911V24.2881C151.911 23.4482 151.799 22.8037 151.574 22.3545C151.164 21.5342 150.383 21.124 149.23 21.124Z" fill="#1B1642"/>
						<path d="M84.624 51.9868C83.6328 51.9868 82.9526 52.4072 82.5835 53.248C82.3921 53.6924 82.2964 54.2598 82.2964 54.9502V61H79.3843V49.8438H82.2041V51.4741C82.5801 50.8999 82.9355 50.4863 83.2705 50.2334C83.8721 49.7822 84.6343 49.5566 85.5571 49.5566C86.7124 49.5566 87.6558 49.8608 88.3872 50.4692C89.1255 51.0708 89.4946 52.0723 89.4946 53.4736V61H86.5005V54.2017C86.5005 53.6138 86.4219 53.1626 86.2646 52.8481C85.9775 52.2739 85.4307 51.9868 84.624 51.9868ZM101.522 51.2383C102.466 52.4209 102.938 53.8188 102.938 55.4321C102.938 57.0728 102.466 58.4775 101.522 59.6465C100.579 60.8086 99.147 61.3896 97.2261 61.3896C95.3052 61.3896 93.873 60.8086 92.9297 59.6465C91.9863 58.4775 91.5146 57.0728 91.5146 55.4321C91.5146 53.8188 91.9863 52.4209 92.9297 51.2383C93.873 50.0557 95.3052 49.4644 97.2261 49.4644C99.147 49.4644 100.579 50.0557 101.522 51.2383ZM97.2158 51.9355C96.3613 51.9355 95.7017 52.2397 95.2368 52.8481C94.7788 53.4497 94.5498 54.311 94.5498 55.4321C94.5498 56.5532 94.7788 57.418 95.2368 58.0264C95.7017 58.6348 96.3613 58.939 97.2158 58.939C98.0703 58.939 98.7266 58.6348 99.1846 58.0264C99.6426 57.418 99.8716 56.5532 99.8716 55.4321C99.8716 54.311 99.6426 53.4497 99.1846 52.8481C98.7266 52.2397 98.0703 51.9355 97.2158 51.9355ZM110.156 58.9185V61.1025L108.772 61.1538C107.391 61.2017 106.448 60.9624 105.942 60.436C105.614 60.1011 105.45 59.585 105.45 58.8877V52.0073H103.891V49.9258H105.45V46.8086H108.341V49.9258H110.156V52.0073H108.341V57.9136C108.341 58.3716 108.399 58.6587 108.516 58.7749C108.632 58.8843 108.987 58.939 109.582 58.939C109.671 58.939 109.763 58.939 109.859 58.939C109.961 58.9321 110.061 58.9253 110.156 58.9185ZM112.453 51.0332C113.226 50.0488 114.552 49.5566 116.432 49.5566C117.655 49.5566 118.742 49.7993 119.692 50.2847C120.643 50.77 121.118 51.686 121.118 53.0327V58.1597C121.118 58.5151 121.125 58.9458 121.138 59.4517C121.159 59.8345 121.217 60.0942 121.312 60.231C121.408 60.3677 121.552 60.4805 121.743 60.5693V61H118.564C118.476 60.7744 118.414 60.5625 118.38 60.3643C118.346 60.166 118.318 59.9404 118.298 59.6875C117.895 60.125 117.43 60.4976 116.903 60.8052C116.274 61.1675 115.563 61.3486 114.771 61.3486C113.759 61.3486 112.921 61.0615 112.258 60.4873C111.602 59.9062 111.274 59.0859 111.274 58.0264C111.274 56.6523 111.804 55.6577 112.863 55.0425C113.444 54.7075 114.299 54.4683 115.427 54.3247L116.421 54.2017C116.961 54.1333 117.348 54.0479 117.58 53.9453C117.997 53.7676 118.206 53.4907 118.206 53.1147C118.206 52.6567 118.045 52.3423 117.724 52.1714C117.409 51.9937 116.944 51.9048 116.329 51.9048C115.639 51.9048 115.15 52.0757 114.863 52.4175C114.658 52.6704 114.521 53.0122 114.453 53.4429H111.633C111.694 52.4653 111.968 51.6621 112.453 51.0332ZM114.627 58.8877C114.9 59.1133 115.235 59.2261 115.632 59.2261C116.261 59.2261 116.838 59.0415 117.365 58.6724C117.898 58.3032 118.175 57.6299 118.195 56.6523V55.5654C118.011 55.6816 117.823 55.7773 117.631 55.8525C117.447 55.9209 117.19 55.9858 116.862 56.0474L116.206 56.1704C115.591 56.2798 115.15 56.4131 114.883 56.5703C114.432 56.8369 114.207 57.2505 114.207 57.811C114.207 58.3101 114.347 58.6689 114.627 58.8877ZM129.341 52.52C128.166 52.52 127.376 52.9028 126.973 53.6685C126.747 54.0991 126.634 54.7622 126.634 55.6577V61H123.691V49.8232H126.48V51.7715C126.932 51.0264 127.325 50.5171 127.66 50.2437C128.207 49.7856 128.917 49.5566 129.792 49.5566C129.847 49.5566 129.892 49.5601 129.926 49.5669C129.967 49.5669 130.052 49.5703 130.182 49.5771V52.5713C129.998 52.5508 129.833 52.5371 129.69 52.5303C129.546 52.5234 129.43 52.52 129.341 52.52ZM136.447 58.0674L138.754 49.8232H141.861L138.026 60.8154C137.288 62.9346 136.704 64.2471 136.273 64.7529C135.842 65.2656 134.981 65.522 133.689 65.522C133.429 65.522 133.221 65.5186 133.063 65.5117C132.906 65.5117 132.67 65.5015 132.356 65.481V63.1431L132.725 63.1636C133.012 63.1772 133.286 63.167 133.545 63.1328C133.805 63.0986 134.024 63.02 134.202 62.897C134.373 62.7808 134.53 62.5381 134.673 62.1689C134.824 61.7998 134.885 61.5742 134.858 61.4922L130.756 49.8232H134.007L136.447 58.0674ZM158.801 51.0229C159.703 51.9868 160.154 53.4019 160.154 55.2681C160.154 57.2368 159.71 58.7373 158.821 59.7695C157.939 60.8018 156.801 61.3179 155.407 61.3179C154.518 61.3179 153.78 61.0957 153.192 60.6514C152.871 60.4053 152.556 60.0464 152.249 59.5747V65.3989H149.357V49.8232H152.156V51.4741C152.471 50.9888 152.806 50.606 153.161 50.3257C153.811 49.8267 154.583 49.5771 155.479 49.5771C156.784 49.5771 157.892 50.0591 158.801 51.0229ZM157.14 55.4116C157.14 54.5503 156.941 53.7881 156.545 53.125C156.155 52.4619 155.52 52.1304 154.638 52.1304C153.578 52.1304 152.85 52.6328 152.454 53.6377C152.249 54.1709 152.146 54.8477 152.146 55.668C152.146 56.9668 152.491 57.8794 153.182 58.4058C153.592 58.7134 154.077 58.8672 154.638 58.8672C155.451 58.8672 156.07 58.5527 156.494 57.9238C156.924 57.2949 157.14 56.4575 157.14 55.4116ZM169.444 59.4209C169.417 59.4551 169.349 59.5576 169.239 59.7285C169.13 59.8994 169 60.0498 168.85 60.1797C168.392 60.5898 167.947 60.8701 167.517 61.0205C167.093 61.1709 166.594 61.2461 166.02 61.2461C164.365 61.2461 163.251 60.6514 162.677 59.4619C162.355 58.8057 162.195 57.8384 162.195 56.5601V49.8232H165.189V56.5601C165.189 57.1958 165.264 57.6743 165.415 57.9956C165.681 58.563 166.204 58.8467 166.983 58.8467C167.981 58.8467 168.665 58.4434 169.034 57.6367C169.226 57.1992 169.321 56.6216 169.321 55.9038V49.8232H172.285V61H169.444V59.4209ZM181.185 61.2974C180.262 61.2974 179.521 61.1128 178.96 60.7437C178.625 60.5249 178.263 60.1421 177.873 59.5952V61H175.012V45.9062H177.924V51.2793C178.293 50.7598 178.7 50.3633 179.145 50.0898C179.671 49.748 180.341 49.5771 181.154 49.5771C182.624 49.5771 183.772 50.1069 184.6 51.1665C185.434 52.2261 185.851 53.5933 185.851 55.2681C185.851 57.0044 185.44 58.4434 184.62 59.585C183.8 60.7266 182.655 61.2974 181.185 61.2974ZM182.785 55.5757C182.785 54.7827 182.682 54.1265 182.477 53.6069C182.087 52.6226 181.37 52.1304 180.324 52.1304C179.264 52.1304 178.536 52.6123 178.14 53.5762C177.935 54.0889 177.832 54.752 177.832 55.5654C177.832 56.5225 178.044 57.3154 178.468 57.9443C178.892 58.5732 179.538 58.8877 180.406 58.8877C181.158 58.8877 181.742 58.5835 182.159 57.9751C182.576 57.3667 182.785 56.5669 182.785 55.5757ZM188.014 45.8857H190.937V61H188.014V45.8857ZM196.802 49.8232V61H193.838V49.8232H196.802ZM196.802 45.7935V48.4902H193.838V45.7935H196.802ZM209.312 53.8325H206.317C206.263 53.4155 206.123 53.0396 205.897 52.7046C205.569 52.2534 205.06 52.0278 204.369 52.0278C203.385 52.0278 202.711 52.5166 202.349 53.4941C202.158 54.0137 202.062 54.7041 202.062 55.5654C202.062 56.3857 202.158 57.0454 202.349 57.5444C202.698 58.4741 203.354 58.939 204.318 58.939C205.001 58.939 205.487 58.7544 205.774 58.3853C206.061 58.0161 206.235 57.5376 206.297 56.9497H209.281C209.212 57.8384 208.891 58.6792 208.317 59.4722C207.401 60.7505 206.044 61.3896 204.246 61.3896C202.448 61.3896 201.125 60.8564 200.278 59.79C199.43 58.7236 199.006 57.3394 199.006 55.6372C199.006 53.7163 199.475 52.2227 200.411 51.1562C201.348 50.0898 202.64 49.5566 204.287 49.5566C205.688 49.5566 206.833 49.8711 207.722 50.5C208.618 51.1289 209.147 52.2397 209.312 53.8325Z" fill="#1B1642"/>
					</svg>
				</div>
				<div className="flex items-center text-[16px] font-medium justify-center max-[500px]:mt-[20px]">
					{/* <div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#home')}>Home</div>
					<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#aboutus')}>About Us</div>
					<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#ourservices')}>Our Services</div>
					<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#casestudies')}>Case Studies</div> */}
					<a href="tel:519-868-7359" target="_blank">
						<button className="bg-[#2F6AD9] px-[20px] py-[15px] text-[#ffffff] flex items-center rounded-[5px]">
							<svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21.1778 16.42V19.42C21.1789 19.6985 21.1219 19.9742 21.0103 20.2293C20.8987 20.4845 20.7351 20.7136 20.5299 20.9019C20.3246 21.0901 20.0824 21.2335 19.8185 21.3227C19.5547 21.4119 19.2752 21.4451 18.9978 21.42C15.9206 21.0856 12.9648 20.0341 10.3678 18.35C7.95162 16.8147 5.90313 14.7662 4.36779 12.35C2.67777 9.7412 1.62603 6.77099 1.29779 3.68C1.2728 3.40347 1.30566 3.12476 1.39429 2.86162C1.48292 2.59849 1.62536 2.35669 1.81256 2.15162C1.99975 1.94655 2.22759 1.78271 2.48158 1.67052C2.73557 1.55833 3.01013 1.50026 3.28779 1.5H6.28779C6.7731 1.49522 7.24358 1.66708 7.61155 1.98353C7.97952 2.29999 8.21987 2.73945 8.28779 3.22C8.41441 4.18007 8.64924 5.12273 8.98779 6.03C9.12233 6.38792 9.15145 6.77691 9.0717 7.15088C8.99194 7.52485 8.80665 7.86811 8.53779 8.14L7.26779 9.41C8.69135 11.9135 10.7642 13.9864 13.2678 15.41L14.5378 14.14C14.8097 13.8711 15.1529 13.6858 15.5269 13.6061C15.9009 13.5263 16.2899 13.5555 16.6478 13.69C17.5551 14.0286 18.4977 14.2634 19.4578 14.39C19.9436 14.4585 20.3872 14.7032 20.7043 15.0775C21.0215 15.4518 21.19 15.9296 21.1778 16.42Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							<span className="ml-[10px]">
								+1 (519)-868-7359
							</span>
						</button>
					</a>
				</div>
				{/* <div className="border-[#2F6AD9] border-[2px] border-solid p-[5px] rounded-[5px] min-[1000px]:hidden cursor-pointer" onClick={onBurgerMenuClicked}>
					<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="SVGRepo_bgCarrier" stroke-width="0"/>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
						<g id="SVGRepo_iconCarrier"> <path d="M5 12H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 17H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> </g>
					</svg>
				</div> */}
			</div>
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
								<a href="" target="_blank">
									<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
										Contact Us
									</button>
								</a>
							</div>
						</div>

					</div>

				</div>

				{/*fold 1*/}
				<div className="flex items-center">
					<div id="home" className="my-[100px] min-[1100px]:w-[50%]">
						<div className="max-[1000px]:text-[38px] text-[48px] text-[#1B1642] font-bold">Empowering your legal document needs with <span className="text-[#2F6AD9]">Karen.</span></div>
						<div className="text-[16px] leading-[32px] text-[#677788] my-[30px]">
							At Karen Gisèle Gagné Notary Public, offering trusted and professional notary services in the heart of London, Ontario. With over a decade of experience and a passion for law, Karen is dedicated to ensuring your documents are notarized with precision and care.
						</div>
						<a href="https://koalendar.com/e/meet-with-notary-public-karen-gagne" target="_blank">
							<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff] max-[700px]:mx-auto block">
								Book an appointment
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
					<div className="text-[#677788] text-[16px] leading-[32px] my-[30px] max-w-[700px] mx-auto">
						Karen is committed to providing her customers with precise, reliable, affordable, hassle-free notarizations while maintaining the highest professional standards.
					</div>
					<div className="grid min-[1101px]:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-[20px] justify-center">
						<div className="col-span-2 rounded-[10px] p-[20px] border-solid border-[#eaeaea] border-[1px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="flex justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#377DFF" class="bi bi-person-fill" viewBox="0 0 16 16">
									<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
								</svg>
							</div>
							<div className="h-[50px] text-[18px] font-semibold leading-[28px] text-[#1E2022] my-[20px]">100% Notarization Guarantee</div>
							<div className="text-[16px] text-[#677788] flex">
								<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#387dff" stroke="#387dff">
									<g id="SVGRepo_bgCarrier" stroke-width="1"/>
									<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
									<g id="SVGRepo_iconCarrier"> <title>i</title> <g id="Complete"> <g id="tick"> <polyline points="3.7 14.3 9.6 19 20.3 5" fill="none" stroke="#387dff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/> </g> </g> </g>
								</svg>
								<span className="ml-[20px] text-left">Notarial error money back guarantee</span>
							</div>
							<div className="text-[16px] text-[#677788] flex mt-[10px]">
								<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#387dff" stroke="#387dff">
									<g id="SVGRepo_bgCarrier" stroke-width="1"/>
									<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
									<g id="SVGRepo_iconCarrier"> <title>i</title> <g id="Complete"> <g id="tick"> <polyline points="3.7 14.3 9.6 19 20.3 5" fill="none" stroke="#387dff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/> </g> </g> </g>
								</svg>
								<span className="ml-[20px] text-left">Lowest price advantage</span>
							</div>
						</div>
						<div className="col-span-2 rounded-[10px] p-[20px] border-solid border-[#eaeaea] border-[1px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="flex justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#377DFF" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg>
							</div>
							<div className="h-[50px] text-[18px] font-semibold leading-[28px] text-[#1E2022] my-[20px]">Your Trusted Notary Public</div>
							<div className="text-[16px] text-[#677788] flex">
								<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#387dff" stroke="#387dff">
									<g id="SVGRepo_bgCarrier" stroke-width="1"/>
									<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
									<g id="SVGRepo_iconCarrier"> <title>i</title> <g id="Complete"> <g id="tick"> <polyline points="3.7 14.3 9.6 19 20.3 5" fill="none" stroke="#387dff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/> </g> </g> </g>
								</svg>
								<span className="ml-[20px] text-left">Services in English & French</span>
							</div>
							<div className="text-[16px] text-[#677788] flex mt-[10px]">
								<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#387dff" stroke="#387dff">
									<g id="SVGRepo_bgCarrier" stroke-width="1"/>
									<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
									<g id="SVGRepo_iconCarrier"> <title>i</title> <g id="Complete"> <g id="tick"> <polyline points="3.7 14.3 9.6 19 20.3 5" fill="none" stroke="#387dff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/> </g> </g> </g>
								</svg>
								<span className="ml-[20px] text-left">Walk In Notary Services</span>
							</div>
							<div className="text-[16px] text-[#677788] flex mt-[10px]">
								<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#387dff" stroke="#387dff">
									<g id="SVGRepo_bgCarrier" stroke-width="1"/>
									<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
									<g id="SVGRepo_iconCarrier"> <title>i</title> <g id="Complete"> <g id="tick"> <polyline points="3.7 14.3 9.6 19 20.3 5" fill="none" stroke="#387dff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/> </g> </g> </g>
								</svg>
								<span className="ml-[20px] text-left">Easy Online Bookings</span>
							</div>
							<div className="text-[16px] text-[#677788] flex mt-[10px]">
								<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#387dff" stroke="#387dff">
									<g id="SVGRepo_bgCarrier" stroke-width="1"/>
									<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
									<g id="SVGRepo_iconCarrier"> <title>i</title> <g id="Complete"> <g id="tick"> <polyline points="3.7 14.3 9.6 19 20.3 5" fill="none" stroke="#387dff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/> </g> </g> </g>
								</svg>
								<span className="ml-[20px] text-left">Mobile Services</span>
							</div>
						</div>
						<div className="col-span-2 max-[1100px]:col-start-2 max-[767px]:col-start-1 rounded-[10px] p-[20px] border-solid border-[#eaeaea] border-[1px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="flex justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#377DFF" class="bi bi-people-fill" viewBox="0 0 16 16">
									<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
								</svg>
							</div>
							<div className="h-[50px] text-[18px] font-semibold leading-[28px] text-[#1E2022] my-[20px]">Authentication “Apostille” Registered</div>
							<div className="text-[16px] text-[#677788] flex">
								<svg className="min-w-[20px]" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#387dff" stroke="#387dff">
									<g id="SVGRepo_bgCarrier" stroke-width="1"/>
									<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
									<g id="SVGRepo_iconCarrier"> <title>i</title> <g id="Complete"> <g id="tick"> <polyline points="3.7 14.3 9.6 19 20.3 5" fill="none" stroke="#387dff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/> </g> </g> </g>
								</svg>
								<span className="ml-[20px] text-left">Karen Gagné Notary Public is a legitimate body of authority appointed by the Attorney General of Ontario.</span>
							</div>
							<div className="text-[16px] text-[#677788] flex mt-[10px]">
								<svg className="min-w-[20px]" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#387dff" stroke="#387dff">
									<g id="SVGRepo_bgCarrier" stroke-width="1"/>
									<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
									<g id="SVGRepo_iconCarrier"> <title>i</title> <g id="Complete"> <g id="tick"> <polyline points="3.7 14.3 9.6 19 20.3 5" fill="none" stroke="#387dff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/> </g> </g> </g>
								</svg>
								<span className="ml-[20px] text-left">Registered with Official Document Services to prepare documents for the Authentication “Apostille” process in Canada.</span>
							</div>
						</div>
					</div>
				</div>

				{/*fold 3*/}
				<div id="ourservices" className="text-center">
					<div className="text-[32px] font-bold  my-[50px]">Our Services</div>
					<div className="grid min-[1100px]:grid-cols-3 min-[700px]:grid-cols-2 grid-cols-1 gap-[20px]">
						<div className="p-[20px] text-center rounded-[10px]">
							<svg className="mx-auto h-[60px]" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#377DFF" viewBox="0 0 16 16">
								<path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
								<path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5m6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px] h-[60px]">
								Certified True Copies
							</div>
							<div className="text-[#677788]">
								Creates certified true copies of documents like birth certificates and diplomas, ensuring they are accurate and match the originals.
							</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto h-[60px]" xmlns="http://www.w3.org/2000/svg" width="84" height="53">
								<image id="img_0" x="0" y="3" width="50" height="50" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iIzM3N0RGRiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41MiAzLjUxNUEyLjUgMi41IDAgMCAxIDQuODIgMmg2LjM2MmMxIDAgMS45MDQuNTk2IDIuMjk4IDEuNTE1bC43OTIgMS44NDhjLjA3NS4xNzUuMjEuMzE5LjM4LjQwNC41LjI1Ljg1NS43MTUuOTY1IDEuMjYybC4zMzUgMS42NzlxLjA1LjI0Mi4wNDkuNDl2LjQxM2MwIC44MTQtLjM5IDEuNTQzLTEgMS45OTdWMTMuNWEuNS41IDAgMCAxLS41LjVoLTJhLjUuNSAwIDAgMS0uNS0uNXYtMS4zMzhjLTEuMjkyLjA0OC0yLjc0NS4wODgtNCAuMDg4cy0yLjcwOC0uMDQtNC0uMDg4VjEzLjVhLjUuNSAwIDAgMS0uNS41aC0yYS41LjUgMCAwIDEtLjUtLjV2LTEuODkyYy0uNjEtLjQ1NC0xLTEuMTgzLTEtMS45OTd2LS40MTNhMi41IDIuNSAwIDAgMSAuMDQ5LS40OWwuMzM1LTEuNjhjLjExLS41NDYuNDY1LTEuMDEyLjk2NC0xLjI2MWEuOC44IDAgMCAwIC4zODEtLjQwNGwuNzkyLTEuODQ4Wk0zIDEwYTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMm0xMCAwYTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMk02IDhhMSAxIDAgMCAwIDAgMmg0YTEgMSAwIDEgMCAwLTJ6TTIuOTA2IDUuMTg5YS41MS41MSAwIDAgMCAuNDk3LjczMWMuOTEtLjA3MyAzLjM1LS4xNyA0LjU5Ny0uMTdzMy42ODguMDk3IDQuNTk3LjE3YS41MS41MSAwIDAgMCAuNDk3LS43MzFsLS45NTYtMS45MTNBLjUuNSAwIDAgMCAxMS42OTEgM0g0LjMwOWEuNS41IDAgMCAwLS40NDcuMjc2TDIuOTA2IDUuMTlaIi8+Cjwvc3ZnPg==" opacity="1"  />
								<image id="img_1" x="34" y="0" width="50" height="50" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iIzM3N0RGRiIgY2xhc3M9ImJpIGJpLWNsaXBib2FyZC1jaGVjay1maWxsIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogIDxwYXRoIGQ9Ik02LjUgMEExLjUgMS41IDAgMCAwIDUgMS41djFBMS41IDEuNSAwIDAgMCA2LjUgNGgzQTEuNSAxLjUgMCAwIDAgMTEgMi41di0xQTEuNSAxLjUgMCAwIDAgOS41IDB6bTMgMWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTNhLjUuNSAwIDAgMS0uNS0uNXYtMWEuNS41IDAgMCAxIC41LS41eiIvPgogIDxwYXRoIGQ9Ik00IDEuNUgzYTIgMiAwIDAgMC0yIDJWMTRhMiAyIDAgMCAwIDIgMmgxMGEyIDIgMCAwIDAgMi0yVjMuNWEyIDIgMCAwIDAtMi0yaC0xdjFBMi41IDIuNSAwIDAgMSA5LjUgNWgtM0EyLjUgMi41IDAgMCAxIDQgMi41em02Ljg1NCA3LjM1NC0zIDNhLjUuNSAwIDAgMS0uNzA4IDBsLTEuNS0xLjVhLjUuNSAwIDAgMSAuNzA4LS43MDhMNy41IDEwLjc5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMCAxIC43MDguNzA4Ii8+Cjwvc3ZnPg==" opacity="1"  />
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px] h-[60px]">
								Mobile Notary
							</div>
							<div className="text-[#677788]">
								Can’t come to us? No problem! Offers Mobile Services to your Home, Office, Hospital Room , Retirement Residence etc...
							</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto h-[60px]" fill="#377DFF" height="60px" width="60px" version="1.1" id="Layer_1" viewBox="0 0 512 512" stroke="#377DFF" stroke-width="12.8">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <g> <g> <circle cx="305.021" cy="430.298" r="8.17"/> </g> </g> <g> <g> <circle cx="337.702" cy="462.979" r="8.17"/> </g> </g> <g> <g> <path d="M389.447,495.66h-2.723v-51.745c0-31.769-23.779-58.07-54.468-62.088v-8.72c0-19.522-15.883-35.404-35.404-35.404H100.766 c-19.521,0-35.404,15.882-35.404,35.404v8.72c-30.689,4.018-54.468,30.319-54.468,62.088v51.745H8.17 c-4.512,0-8.17,3.657-8.17,8.17S3.658,512,8.17,512h381.277c4.512,0,8.17-3.657,8.17-8.17S393.959,495.66,389.447,495.66z M370.383,495.66H27.234v-51.745c0-25.529,20.769-46.298,46.298-46.298h32.681c4.512,0,8.17-3.657,8.17-8.17 c0-4.513-3.658-8.17-8.17-8.17H81.702v-8.17c0-10.511,8.553-19.064,19.064-19.064h196.085c10.511,0,19.064,8.553,19.064,19.064 v8.17H138.894c-4.512,0-8.17,3.657-8.17,8.17c0,4.513,3.658,8.17,8.17,8.17h185.191c25.529,0,46.298,20.769,46.298,46.298V495.66z "/> </g> </g> <g> <g> <path d="M471.149,119.83c-12.889,0-25.01,6.157-32.67,16.34H283.234v-32.681h2.723c4.512,0,8.17-3.657,8.17-8.17 s-3.658-8.17-8.17-8.17h-2.723V69.847c15.594-3.699,27.234-17.733,27.234-34.442C310.468,15.882,294.585,0,275.064,0H122.553 c-19.521,0-35.404,15.882-35.404,35.404c0,16.71,11.64,30.743,27.234,34.442v17.302h-2.723c-4.512,0-8.17,3.657-8.17,8.17 s3.658,8.17,8.17,8.17h2.723v114.383h-2.723c-4.512,0-8.17,3.657-8.17,8.17c0,4.513,3.658,8.17,8.17,8.17h2.723v17.302 c-15.594,3.699-27.234,17.733-27.234,34.442c0,19.522,15.883,35.404,35.404,35.404h152.511c19.521,0,35.404-15.882,35.404-35.404 c0-16.71-11.64-30.743-27.234-34.442v-17.302h2.723c4.512,0,8.17-3.657,8.17-8.17c0-4.513-3.658-8.17-8.17-8.17h-2.723v-65.362 h159.617c2.916,0,5.611-1.555,7.071-4.077c4.378-7.565,12.511-12.263,21.227-12.263c13.516,0,24.511,10.996,24.511,24.511 c0,13.515-10.995,24.511-24.511,24.511c-8.716,0-16.849-4.698-21.226-12.263c-1.46-2.523-4.155-4.077-7.071-4.077H307.745 c-4.512,0-8.17,3.657-8.17,8.17s3.658,8.17,8.17,8.17h130.734c7.66,10.183,19.781,16.34,32.67,16.34 c22.526,0,40.851-18.325,40.851-40.851S493.675,119.83,471.149,119.83z M294.128,285.957c0,10.511-8.553,19.064-19.064,19.064 H122.553c-10.511,0-19.064-8.553-19.064-19.064s8.553-19.064,19.064-19.064h152.511 C285.575,266.894,294.128,275.446,294.128,285.957z M266.894,103.489v114.383h-136.17V103.489H266.894z M130.723,87.149v-16.34 h136.17v16.34H130.723z M266.894,234.213v16.34h-136.17v-16.34H266.894z M275.064,54.468H122.553 c-10.511,0-19.064-8.553-19.064-19.064c0-10.511,8.553-19.064,19.064-19.064h152.511c10.511,0,19.064,8.553,19.064,19.064 C294.128,45.916,285.575,54.468,275.064,54.468z"/> </g> </g> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px] h-[60px]">
								Wills and Power of Attorney
							</div>
							<div className="text-[#677788]">
								As an Affiliate of epilogue wills , you can draft your Will & POA’s through our online portal in minutes, enjoy a discount & have them Notarized ensuring compliance.
							</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto h-[60px]" fill="#387dff" height="50px" width="50px" version="1.1" id="Capa_1" viewBox="0 0 408.71 408.71" stroke="#387dff" stroke-width="8.1742">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <g> <path d="M377.888,90.539c-0.675-3.525-4.067-5.836-7.605-5.163l-43.385,8.301c-11.8,2.267-21.844,9.61-27.563,20.15l-0.193,0.344 c-0.018,0.03-0.034,0.06-0.05,0.09c-12.18,22.447-29.573,42.223-50.303,57.19l-10.19,7.36c-0.281,0.203-0.545,0.428-0.791,0.673 l-69.759,69.76c-7.024,7.022-17.944,7.898-25.966,2.086c-0.861-0.626-1.685-1.329-2.442-2.086 c-3.796-3.797-5.887-8.841-5.887-14.205c0-5.37,2.089-10.413,5.886-14.204l45.912-45.912c16.833-16.844,18.861-43.027,4.822-62.257 c-9.008-12.34-23.498-19.708-38.76-19.708c-0.943,0-4.021,0.161-5.354,0.233c-11.686,0.729-22.682,5.69-30.962,13.971l-38.18,38.18 c-1.196,1.196-1.879,2.811-1.903,4.501l-1,68.499c-0.057,3.838-1.554,7.448-4.146,10.196h-4.834c-3.011,0-5.537,2.051-6.275,4.83 c-0.002,0-0.003,0-0.005,0c-8.409,0-15.25-6.832-15.25-15.23c0-0.226,3.564-88.083,3.564-88.083 c0.125-3.033,1.349-5.89,3.455-8.055l96.86-100C153.408,16.197,161.148,13,169.385,13h116.859c3.59,0,6.5-2.91,6.5-6.5 s-2.91-6.5-6.5-6.5H169.385c-11.726,0-22.744,4.562-31.027,12.844c-0.024,0.024-0.048,0.049-0.072,0.074l-96.889,100.03 c-4.333,4.453-6.86,10.339-7.117,16.579c0,0-3.575,88.24-3.575,88.614c0,15.492,12.554,28.105,28.03,28.225V402.21 c0,3.59,2.91,6.5,6.5,6.5h73.03c3.59,0,6.5-2.91,6.5-6.5V266.874c2.979,0.859,6.035,1.308,9.089,1.308 c8.499,0,16.942-3.3,23.388-9.745l69.391-69.392l9.768-7.054c22.286-16.09,40.99-37.352,54.093-61.483l0.195-0.347 c0.019-0.033,0.037-0.065,0.055-0.098c3.852-7.123,10.634-12.087,18.604-13.618l43.38-8.3 C376.252,97.47,378.563,94.064,377.888,90.539z M121.389,241.54c1.081,5.453,3.528,10.525,7.16,14.82H71.735v-14.82H121.389z M71.735,353.002h60.03v14.88h-60.03V353.002z M71.735,340.002v-14.881h60.03v14.881H71.735z M71.735,312.122v-14.881h60.03v14.881 H71.735z M71.735,284.241V269.36h60.03v14.881H71.735z M124.492,116.356c6.038-6.039,14.057-9.657,22.523-10.186 c1.847-0.1,4.131-0.208,4.6-0.211c8.865,0,17.367,3.42,23.782,9.359l-22.642,15.625c-2.955,2.039-3.697,6.087-1.658,9.042 c1.261,1.828,3.291,2.809,5.355,2.809c1.272,0,2.56-0.373,3.686-1.151l23.009-15.878c6.432,13.225,3.964,29.209-6.788,39.968 l-6.567,6.567l-42.318,0.759c-7.811-0.029-14.156-6.392-14.156-14.208v-31.321L124.492,116.356z M87.213,218.535l0.962-65.863 l12.142-12.141v18.321c0,15.003,12.206,27.208,27.209,27.208c0.039,0,0.078,0,0.116-0.001l28.91-0.519l-26.099,26.1 c-4.693,4.685-7.804,10.534-9.064,16.9H85.22C86.468,225.395,87.162,222.015,87.213,218.535z M71.735,395.71v-14.827h60.03v14.827 H71.735z"/> <path d="M239.267,367.883h-73.035c-3.59,0-6.5,2.91-6.5,6.5v27.824c0,3.59,2.91,6.5,6.5,6.5h73.035c3.59,0,6.5-2.91,6.5-6.5 v-27.824C245.767,370.793,242.857,367.883,239.267,367.883z M232.767,395.707h-60.035v-14.824h60.035V395.707z"/> </g> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px] h-[60px]">
								Notary Public & Commissioner for Taking Affidavits
							</div>
							<div className="text-[#677788]">
								Notarizes & Commissions Affidavits, Statutory Declarations, Affirmations, Court, Immigration, Passport, FRO forms, invitation letters & more...
							</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto h-[60px]" width="60px" height="60px" viewBox="0 0 28 28" version="1.1" fill="#377DFF" stroke="#377DFF">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> 
								<g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_signature_28_filled" fill="#377DFF" fill-rule="nonzero"> <path d="M16.4798956,21.0019578 L16.75,21 C17.9702352,21 18.6112441,21.5058032 19.4020627,22.7041662 L19.7958278,23.3124409 C20.1028266,23.766938 20.2944374,23.9573247 20.535784,24.0567929 C20.9684873,24.2351266 21.3271008,24.1474446 22.6440782,23.5133213 L23.0473273,23.3170319 C23.8709982,22.9126711 24.4330286,22.6811606 25.0680983,22.5223931 C25.4699445,22.4219316 25.8771453,22.6662521 25.9776069,23.0680983 C26.0780684,23.4699445 25.8337479,23.8771453 25.4319017,23.9776069 C25.0371606,24.0762922 24.6589465,24.2178819 24.1641364,24.4458997 L23.0054899,25.0032673 C21.4376302,25.7436944 20.9059009,25.8317321 19.964216,25.4436275 C19.3391237,25.1860028 18.9836765,24.813298 18.4635639,24.0180227 L18.2688903,23.7140849 C17.6669841,22.7656437 17.3640608,22.5 16.75,22.5 L16.5912946,22.5037584 C16.1581568,22.5299816 15.8777212,22.7284469 14.009281,24.1150241 C12.2670395,25.4079488 10.9383359,26.0254984 9.24864243,26.0254984 C7.18872869,26.0254984 5.24773367,25.647067 3.43145875,24.8905363 L6.31377803,24.2241784 C7.25769404,24.4250762 8.23567143,24.5254984 9.24864243,24.5254984 C10.5393035,24.5254984 11.609129,24.0282691 13.1153796,22.9104743 L14.275444,22.0545488 C15.5468065,21.1304903 15.8296113,21.016032 16.4798956,21.0019578 L16.4798956,21.0019578 Z M22.7770988,3.22208979 C24.4507223,4.8957133 24.4507566,7.60916079 22.7771889,9.28281324 L21.741655,10.3184475 C22.8936263,11.7199657 22.8521526,13.2053774 21.7811031,14.279556 L18.7800727,17.2805874 L18.7800727,17.2805874 C18.4870374,17.5733384 18.0121637,17.573108 17.7194126,17.2800727 C17.4266616,16.9870374 17.426892,16.5121637 17.7199273,16.2194126 L20.7188969,13.220444 C21.2039571,12.7339668 21.2600021,12.1299983 20.678941,11.3818945 L10.0845437,21.9761011 C9.78635459,22.2743053 9.41036117,22.482705 8.99944703,22.5775313 L2.91864463,23.9807934 C2.37859061,24.1054212 1.89457875,23.6214094 2.0192066,23.0813554 L3.42247794,17.0005129 C3.51729557,16.5896365 3.72566589,16.2136736 4.0238276,15.9154968 L16.7165019,3.22217992 C18.3900415,1.54855555 21.1034349,1.54851059 22.7770988,3.22208979 Z" id="🎨-Color"> </path> </g> </g> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px] h-[60px]">
								Identity and Signature Verifications
							</div>
							<div className="text-[#677788]">
								Provides verification of identities and signatures for security clearances, life certificates, and other essential documents. May also act as a Witness for your documents.
							</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto h-[60px]" height="60px" width="60px" version="1.1" id="_x32_" viewBox="0 0 512 512" fill="#377DFF" stroke="#377DFF">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <g> <path class="st0" d="M255.366,141.046c-7.4,3.583-14.732,8.548-21.533,15.357c-34.091,34.098-65.081,65.088-65.081,65.088 l0.013,0.02c-0.185,0.186-0.371,0.338-0.557,0.53c-8.824,8.831-9.174,22.909-1.025,32.146c0.323,0.371,0.668,0.736,1.025,1.086 c9.161,9.174,24.036,9.196,33.232,0l35.797-35.797c6.176,2.263,12.248,3.583,18.074,4.243c7.937,0.88,15.392,0.55,22.022-0.385 c16.162-2.29,14.47-1.623,23.844-4.704c9.353-3.068,19.862-9.354,19.862-9.354l6.362,6.355 c0.701,0.681,16.919,16.925,25.192,25.185c1.465,1.471,2.709,2.682,3.542,3.549c0.956,0.997,2.022,1.719,2.682,2.682l41.278,41.279 c11.898-13.35,25.488-33.232,23.81-56.058L320.763,129.14C320.763,129.14,285.062,126.589,255.366,141.046z"/> <path class="st0" d="M261.115,394.362c-9.134-9.147-23.961-9.147-33.101,0l-6.794,6.794c9.119-9.132,9.112-23.926-0.021-33.066 c-9.14-9.126-23.947-9.126-33.087,0.007c9.14-9.133,9.14-23.94,0-33.087c-9.133-9.148-23.947-9.133-33.087,0 c9.14-9.133,9.14-23.947,0-33.095c-9.134-9.132-23.947-9.132-33.088,0.014l-20.46,20.453c-9.14,9.147-9.14,23.947,0,33.094 c9.133,9.134,23.941,9.134,33.08,0c-9.14,9.134-9.14,23.947,0,33.087c9.147,9.133,23.954,9.133,33.094,0 c-9.14,9.133-9.14,23.941,0,33.088c9.14,9.133,23.947,9.133,33.088,0l6.802-6.809c-9.119,9.147-9.113,23.94,0.02,33.081 c9.14,9.132,23.947,9.132,33.088,0l20.467-20.468C270.248,418.302,270.248,403.495,261.115,394.362z"/> <path class="st0" d="M507.987,178.28L387.543,57.822c-5.351-5.337-14.002-5.337-19.339,0l-38.631,38.63 c-5.337,5.337-5.337,13.989,0,19.333l120.458,120.451c5.33,5.35,13.996,5.35,19.326,0l38.63-38.638 C513.338,192.276,513.338,183.624,507.987,178.28z M473.655,204.992c-5.75,5.736-15.048,5.736-20.777,0 c-5.735-5.743-5.735-15.041,0-20.777c5.729-5.736,15.027-5.736,20.777,0C479.391,189.951,479.384,199.249,473.655,204.992z"/> <path class="st0" d="M182.417,99.864l-38.624-38.63c-5.336-5.337-13.995-5.337-19.332,0L4.003,181.691 c-5.337,5.323-5.337,13.989,0,19.319l38.631,38.644c5.33,5.331,14.002,5.331,19.325,0l120.458-120.458 C187.761,113.859,187.761,105.207,182.417,99.864z M59.118,208.403c-5.736,5.729-15.04,5.729-20.777,0 c-5.735-5.742-5.735-15.041,0-20.777c5.736-5.735,15.041-5.735,20.777,0C64.854,193.362,64.854,202.66,59.118,208.403z"/> <path class="st0" d="M397.528,312.809l-7.468-7.482l-72.509-72.509l-4.883,2.166l-5.316,1.919l-0.384,0.117 c-0.936,0.296-9.684,2.971-26.932,5.412c-9.12,1.273-18.156,1.431-26.904,0.434c-3.459-0.385-6.898-0.95-10.296-1.692 l-27.757,27.744c-16.678,16.678-43.836,16.678-60.514,0c-0.585-0.591-1.149-1.19-1.671-1.781l-0.179-0.2 c-10.529-11.939-13.204-28.28-8.252-42.461l10.673-16.609l-0.02-0.02l65.081-65.074c2.647-2.641,5.426-5.103,8.314-7.428 c-20.281-3.982-37.296-2.806-37.296-2.806L88.093,235.679c-1.389,18.988,11.651,39.799,20.928,51.952 c16.692-15.963,43.239-15.756,59.641,0.654c6.107,6.1,9.952,13.617,11.574,21.498c7.895,1.637,15.406,5.475,21.513,11.582 c6.107,6.114,9.952,13.631,11.575,21.519c7.888,1.623,15.412,5.46,21.513,11.568c4.078,4.078,7.152,8.783,9.222,13.817 c11.1-0.137,22.242,4.016,30.688,12.455c16.65,16.636,16.643,43.733,0,60.363l-6.809,6.822l3.411,3.412 c9.148,9.147,23.954,9.147,33.095,0c9.14-9.134,9.14-23.947,0-33.088l6.808,6.83c9.147,9.133,23.947,9.133,33.087,0 c9.14-9.147,9.147-23.954,0-33.101c9.147,9.147,23.947,9.147,33.087,0c9.134-9.126,9.154-23.94,0-33.088 c9.154,9.148,23.954,9.148,33.088,0c9.147-9.132,9.147-23.947,0-33.08L397.528,312.809z"/> </g> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px] h-[60px]">
								Out of Province & Cross-border Real Estate Closings
							</div>
							<div className="text-[#677788]">
								Offers years of expert notarization for real estate transactions, ensuring a smooth, secure, and legally binding process.
							</div>
						</div>
					</div>
				</div>

				{/*fold 4*/}
				<div id="casestudies" className="">
					<div className="flex items-start my-[70px]">
						<div className="my-auto">
							<div className="text-[32px] text-[#1B1642] font-bold">Karen’s Success Stories</div>
							<div className="text-[16px] text-[#677788] mt-[20px]">
								Karen's dedication to law and service has made a significant impact on the community and beyond. With a strong foundation in legal expertise and a passion for helping others, Karen continues to make a difference through her notary services.
								<br />
								<div className="max-[1100px]:hidden">
									<br />
									Karen's legal career began with a strong passion for law, leading her to earn an Honors Diploma in Paralegal Studies and become a licensed Paralegal in Ontario. She built a successful practice and worked with one of the province's largest Paralegal firms, handling various legal claims.
									<br />
								</div>
								<br />
								In 2021, Karen was appointed as a Notary Public by the Attorney General of Ontario and opened her own office in Wortley Village, London, ON. Her notarial practice is voted top 3 Best Rated Notaries in London. She is dedicated to providing top-notch services and maintains a 5 star Google Review.
							</div>
						</div>
						<img className="w-[50%] rounded-[20px] ml-[40px] max-[1000px]:hidden my-auto" src={success} alt="Success Stories"/>
					</div>
					<div className="grid min-[700px]:grid-cols-2 grid-cols-1 mt-[50px] gap-[30px] text-center">
						<div className="border-solid border-[#eaeaea] border-[1px] p-[20px] rounded-[10px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="text-[#377DFF] text-[32px] mb-[20px]">
								<span>30</span>
								<span className='text-[40px]'>+</span>
								<div className='text-[20px]'>Years of Legal Experience</div>
							</div>
							<div className="text-[16px] text-[#677788] leading-[30px]">
								Karen brings over 30 years of experience in the legal field, from private investigation to paralegal services, ensuring that each client receives knowledgeable and reliable assistance.
							</div>
						</div>
						<div className="border-solid border-[#eaeaea] border-[1px] p-[20px] rounded-[10px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="text-[#377DFF] text-[32px] mb-[20px]">
								<span>3,000</span>
								<span className='text-[40px]'>+</span>
								<div className='text-[20px]'>Documents Notarized</div>
							</div>
							<div className="text-[16px] text-[#677788] leading-[30px]">
								Since becoming a Notary Public, Karen has successfully notarized over 3,000 documents, providing essential services for individuals, families, and businesses in London, ON, and surrounding areas.
							</div>
						</div>
						<div className="border-solid border-[#eaeaea] border-[1px] p-[20px] rounded-[10px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="text-[#377DFF] text-[32px] mb-[20px]">
								<span>1500</span>
								<span className='text-[40px]'>+</span>
								<div className='text-[20px]'>Trusted Clients</div>
							</div>
							<div className="text-[16px] text-[#677788] leading-[30px]">
								Karen’s practice has received over 250 Five Star Google Reviews. She has gained the trust of hundreds of clients. Her reputation for accuracy, integrity, friendliness and professionalism sets her apart.
							</div>
						</div>
						<div className="border-solid border-[#eaeaea] border-[1px] p-[20px] rounded-[10px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="text-[#377DFF] text-[32px] mb-[20px] h-[90px]">
								<span>Community Engagement</span>
								{/* <span className='text-[40px]'>+</span> */}
								{/* <div className='text-[20px]'>Years of Legal Experience</div> */}
							</div>
							<div className="text-[16px] text-[#677788] leading-[30px]">
								Through outreach initiatives, local events, and accessible services, Karen provides support, information and fosters trust and contributes to the smooth functioning of her notary services to the London community in a culturally sensitive manner.
							</div>
						</div>
					</div>
				</div>

				{/*fold 5*/}
				<div className="text-center mt-[100px]">
					<div className="font-bold text-[32px]">Ready to Meet Your Notary Needs?</div>
					<div className="text-[16px] font-medium text-[#677788] my-[30px]">Get in touch with Karen today and experience reliable, professional notary services tailored to your needs.</div>
					<a className="w-fit mx-auto flex" href="tel:519-868-7359" target="_blank">
						<button className="bg-[#2F6AD9] px-[20px] py-[15px] text-[#ffffff] flex items-center rounded-[5px]">
							<svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21.1778 16.42V19.42C21.1789 19.6985 21.1219 19.9742 21.0103 20.2293C20.8987 20.4845 20.7351 20.7136 20.5299 20.9019C20.3246 21.0901 20.0824 21.2335 19.8185 21.3227C19.5547 21.4119 19.2752 21.4451 18.9978 21.42C15.9206 21.0856 12.9648 20.0341 10.3678 18.35C7.95162 16.8147 5.90313 14.7662 4.36779 12.35C2.67777 9.7412 1.62603 6.77099 1.29779 3.68C1.2728 3.40347 1.30566 3.12476 1.39429 2.86162C1.48292 2.59849 1.62536 2.35669 1.81256 2.15162C1.99975 1.94655 2.22759 1.78271 2.48158 1.67052C2.73557 1.55833 3.01013 1.50026 3.28779 1.5H6.28779C6.7731 1.49522 7.24358 1.66708 7.61155 1.98353C7.97952 2.29999 8.21987 2.73945 8.28779 3.22C8.41441 4.18007 8.64924 5.12273 8.98779 6.03C9.12233 6.38792 9.15145 6.77691 9.0717 7.15088C8.99194 7.52485 8.80665 7.86811 8.53779 8.14L7.26779 9.41C8.69135 11.9135 10.7642 13.9864 13.2678 15.41L14.5378 14.14C14.8097 13.8711 15.1529 13.6858 15.5269 13.6061C15.9009 13.5263 16.2899 13.5555 16.6478 13.69C17.5551 14.0286 18.4977 14.2634 19.4578 14.39C19.9436 14.4585 20.3872 14.7032 20.7043 15.0775C21.0215 15.4518 21.19 15.9296 21.1778 16.42Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							<span className="ml-[10px]">
								+1 (519)-868-7359
							</span>
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