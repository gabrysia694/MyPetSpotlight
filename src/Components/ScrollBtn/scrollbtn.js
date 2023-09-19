import React, {useState} from 'react';

export const ScrollToTopBtn = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
    <button id="back-to-top-btn" onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}}>
        <i className="fa fa-arrow-up"></i>
    </button>
);
}

