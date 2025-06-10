
var tl=gsap.timeline()

tl.from(".menu h4 ",{
    y:-30,
	duration:0.7,
	opacity:0,
	stagger:0.3,
})
tl.from(".menu i ",{
    y:-30,
	duration:0.7,
	opacity:0,
	stagger:0.3
})


gsap.from(".c2 h1",{
    x:-30,
	duration:3,
	opacity:0,
	stagger:0.3,
	
})

gsap.from(".c2 h3",{
    x:30,
	duration:2,
	opacity:0,
	stagger:0.3,
		
})

gsap.from(".c2 h5",{
    x:30,
	duration:2,
	opacity:0,
	stagger:0.3,
		
})


gsap.from(".c3 h3",{
    y:-30,
	duration:1,
	opacity:0,
	stagger:0.3,
	scrollTrigger:{
		scroll:"Body",
		trigger:".c3 ",
		// markers:true,
		start:"top 55%",
		end:"top 0"	
	}	
})

var lt = gsap.timeline()
lt.from(".c4 h1",{
    y:30,
	duration:1,
	opacity:0,
	stagger:0.3,
	scrollTrigger:{
		scroll:"Body",
		trigger:".c4 ",
		// markers:true,
		start:"top 65%",
		end:"top 0",
	}
			
})
//scrub properties starting from here.
var t=gsap.timeline()

t.from(".a3 #part1",{
    y:-30,
	duration:2,
	opacity:0,
	stagger:0.8,
	scrollTrigger:{
		scroll:"Body",
		trigger:".a3 ",
		// markers:true,
		start:"top 65%",
		end:"top 0"
	}
})

var t=gsap.timeline()

t.from(".a3 #part2",{
    y:30,
	duration:2,
	opacity:0,
	stagger:0.9,
	scrollTrigger:{
		scroll:"Body",
		trigger:".a3 ",
		// markers:true,
		start:"top 65%",
		end:"top 0"
	}

})

gsap.from(".e1 img",{
	x:-1000,
	duration:2,
	opacity:0,
	stragger:0.3,
	scrollTrigger:{
		scroll:"Body",
		trigger:".e1",
		// markers:true,
		start:"top 60%",
		end:"top 0",
		ease:"power2"
	}
})
var t = gsap.timeline()

t.from(".e2 h5",{
    y:30,
	duration:2,
	opacity:0,
	stagger:0.3,
	scrollTrigger:{
		scroll:"Body",
		trigger:".e2",
		// markers:true,
		start:"top 40%",
		end:"top 0",
		ease:"power2"
	}
})
gsap.from(".e2 h1",{
    x:90,
	duration:2,
	opacity:0,
	stagger:0.3,
	scrollTrigger:{
		scroll:"Body",
		trigger:".e2",
		// markers:true,
		start:"top 50%",
		end:"top 0",
		ease:"power2"
	}
})
gsap.from(".e2 h3",{
    y:-30,
	duration:4,
	opacity:0,
	stagger:0.3,
	scrollTrigger:{
		scroll:"Body",
		trigger:".e2",
		// markers:true,
		start:"top 50%",
		end:"top 0",
		ease:"power2"
	}
})

var p = gsap.timeline()
p.from(".vmm",{
	y:-50,
	duration:2,
	opacity:0,
	stagger:0.6,
	scrollTrigger:{
		scroll:"Body",
		trigger:".mv",
		// markers:true,
		start:"top 55%",
		end:"top 0",
		ease:"power2"
	}
})
p.from(".vm",{
	y:-50,
	duration:2,
	opacity:0,
	stagger:0.3,
	scrollTrigger:{
		scroll:"Body",
		trigger:".mv",
		// markers:true,
		start:"top 55%",
		end:"top 0",
		ease:"power2"
	}
})

gsap.from(".g1",{
	x:-150,
	duratio0n:3,
	opacity:0,
	scrollTrigger:{
		scroll:"Body",
		trigger:".mv",
		// markers:true,
		start:"top 55%",
		end:"top 0"
	}
})

gsap.from(".g2",{
	y:150,
	duratio0n:2,
	opacity:0,
	scrollTrigger:{
		scroll:"Body",
		trigger:".mv",
		// markers:true,
		start:"top 55%",
		end:"top 0"
	}
})

gsap.from(".g3",{
	x:150,
	duratio0n:3,
	opacity:0,
	scrollTrigger:{
		scroll:"Body",
		trigger:".mv",
		// markers:true,
		start:"top 55%",
		end:"top 0"
	}
})