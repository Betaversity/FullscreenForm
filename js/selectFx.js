/**
 * selectFx.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
 var closeScreenHold = false;
 
 var origSelectData = "<select id='q16' name='q16' class='cs-select cs-skin-boxes fs-anim-lower'><optgroup label = 'Miscellaneous'><option class='bv-tag-tag' value = 'Automotive' data-class='color-f3e395'>Automotive</option><option class='bv-tag-tag' value = 'Microfluidics' data-class='color-f3e395'>Microfluidics</option><option class='bv-tag-tag' value = 'Hydraulic Systems' data-class='color-f3e395'>Hydraulic Systems</option><option class='bv-tag-tag' value = 'Robotics' data-class='color-f3e395'>Robotics</option><option class='bv-tag-tag' value = 'Pharmaceuticals' data-class='color-f3e395'>Pharmaceuticals</option><option class='bv-tag-tag' value = 'Virtual Reality' data-class='color-f3e395'>Virtual Reality</option><option class='bv-tag-tag' value = 'Rendering' data-class='color-f3e395'>Rendering</option><option class='bv-tag-tag' value = 'Laser' data-class='color-f3e395'>Laser</option><option class='bv-tag-tag' value = 'Batteries' data-class='color-f3e395'>Batteries</option><option class='bv-tag-tag' value = 'Engine' data-class='color-f3e395'>Engine</option><option class='bv-tag-tag' value = 'Prosthetic' data-class='color-f3e395'>Prosthetic</option></optgroup><optgroup label = 'Energy'><option class='bv-tag-tag' value = 'Solar PV' data-class='color-f3e395'>Solar PV</option><option class='bv-tag-tag' value = 'Wind' data-class='color-f3e395'>Wind</option><option class='bv-tag-tag' value = 'Biomass' data-class='color-f3e395'>Biomass</option><option class='bv-tag-tag' value = 'Hydro' data-class='color-f3e395'>Hydro</option><option class='bv-tag-tag' value = 'Marine Energy' data-class='color-f3e395'>Marine Energy</option><option class='bv-tag-tag' value = 'Solar Thermal' data-class='color-f3e395'>Solar Thermal</option><option class='bv-tag-tag' value = 'Geothermal' data-class='color-f3e395'>Geothermal</option></optgroup><optgroup label = 'Certifications'><option class='bv-tag-tag' value = 'PE' data-class='color-f3e395'>PE</option><option class='bv-tag-tag' value = 'AIA' data-class='color-f3e395'>AIA</option><option class='bv-tag-tag' value = 'Microsoft C++' data-class='color-f3e395'>Microsoft C++</option><option class='bv-tag-tag' value = 'CEM' data-class='color-f3e395'>CEM</option><option class='bv-tag-tag' value = 'Six Sigma' data-class='color-f3e395'>Six Sigma</option><option class='bv-tag-tag' value = 'PEM' data-class='color-f3e395'>PEM</option><option class='bv-tag-tag' value = 'FMEA' data-class='color-f3e395'>FMEA</option><option class='bv-tag-tag' value = 'SPC' data-class='color-f3e395'>SPC</option></optgroup><optgroup label = 'Optics'><option class='bv-tag-tag' value = 'Infrared Imaging' data-class='color-f3e395'>Infrared Imaging</option><option class='bv-tag-tag' value = 'optical systems' data-class='color-f3e395'>optical systems</option><option class='bv-tag-tag' value = 'fiber optics' data-class='color-f3e395'>fiber optics</option><option class='bv-tag-tag' value = 'Photonics' data-class='color-f3e395'>Photonics</option><option class='bv-tag-tag' value = 'Photovoltaic' data-class='color-f3e395'>Photovoltaic</option><option class='bv-tag-tag' value = 'Microscope' data-class='color-f3e395'>Microscope</option></optgroup><optgroup label = 'Hardware and Manufacturing'><option class='bv-tag-tag' value = 'Cnc milling' data-class='color-f3e395'>Cnc milling</option><option class='bv-tag-tag' value = 'Tooling' data-class='color-f3e395'>Tooling	</option><option class='bv-tag-tag' value = 'Soldering' data-class='color-f3e395'>Soldering</option><option class='bv-tag-tag' value = 'Welding	' data-class='color-f3e395'>Welding</option><option class='bv-tag-tag' value = 'Assembly' data-class='color-f3e395'>Assembly</option><option class='bv-tag-tag' value = 'Casting' data-class='color-f3e395'>Casting</option><option class='bv-tag-tag' value = 'Post-processing	' data-class='color-f3e395'>Post-processing</option><option class='bv-tag-tag' value = 'Small Batch Manufacturing' data-class='color-f3e395'>Small Batch Manufacturing</option><option class='bv-tag-tag' value = 'Laser Cutting' data-class='color-f3e395'>Laser Cutting</option><option class='bv-tag-tag' value = 'Polymers' data-class='color-f3e395'>Polymers</option><option class='bv-tag-tag' value = 'Thermoforming' data-class='color-f3e395'>Thermoforming</option><option class='bv-tag-tag' value = 'Quality assurance' data-class='color-f3e395'>Quality assurance</option><option class='bv-tag-tag' value = 'RF Electronics' data-class='color-f3e395'>RF Electronics	</option><option class='bv-tag-tag' value = 'Internet of Things' data-class='color-f3e395'>Internet of Things</option><option class='bv-tag-tag' value = 'Airplane' data-class='color-f3e395'>Airplane</option><option class='bv-tag-tag' value = 'Drone' data-class='color-f3e395'>Drone</option><option class='bv-tag-tag' value = '3D printing' data-class='color-f3e395'>3D printing	</option></optgroup><optgroup label = 'Electronics'><option class='bv-tag-tag' value = '	Semiconductor	' data-class='color-f3e395'>	Semiconductor	</option><option class='bv-tag-tag' value = '	Electroluminescence	' data-class='color-f3e395'>	Electroluminescence	</option><option class='bv-tag-tag' value = '	Arduino	' data-class='color-f3e395'>	Arduino	</option><option class='bv-tag-tag' value = '	Raspberry Pi	' data-class='color-f3e395'>	Raspberry Pi	</option><option class='bv-tag-tag' value = '	Launchpad	' data-class='color-f3e395'>	Launchpad	</option><option class='bv-tag-tag' value = '	Microcontroller	' data-class='color-f3e395'>	Microcontroller	</option><option class='bv-tag-tag' value = '	Ethernet IO	' data-class='color-f3e395'>	Ethernet IO	</option><option class='bv-tag-tag' value = '	LED	' data-class='color-f3e395'>	LED	</option><option class='bv-tag-tag' value = '	LED Chips	' data-class='color-f3e395'>	LED Chips	</option><option class='bv-tag-tag' value = '	Networking Equipment	' data-class='color-f3e395'>	Networking Equipment	</option><option class='bv-tag-tag' value = '	PCD Board Design	' data-class='color-f3e395'>	PCD Board Design	</option><option class='bv-tag-tag' value = '	Signal Processing	' data-class='color-f3e395'>	Signal Processing	</option></optgroup><optgroup label = 'Software'><option class='bv-tag-tag' value = '	Labview	' data-class='color-f3e395'>	Labview	</option><option class='bv-tag-tag' value = '	Teststand	' data-class='color-f3e395'>	Teststand	</option><option class='bv-tag-tag' value = '	Matlab	' data-class='color-f3e395'>	Matlab	</option><option class='bv-tag-tag' value = '	Zemax	' data-class='color-f3e395'>	Zemax	</option><option class='bv-tag-tag' value = '	VMWare	' data-class='color-f3e395'>	VMWare	</option><option class='bv-tag-tag' value = '	XenApp	' data-class='color-f3e395'>	XenApp	</option><option class='bv-tag-tag' value = '	XenDesktop	' data-class='color-f3e395'>	XenDesktop	</option><option class='bv-tag-tag' value = '	NetApp	' data-class='color-f3e395'>	NetApp	</option><option class='bv-tag-tag' value = '	Linux	' data-class='color-f3e395'>	Linux	</option><option class='bv-tag-tag' value = '	Oracle	' data-class='color-f3e395'>	Oracle	</option><option class='bv-tag-tag' value = '	Agile	' data-class='color-f3e395'>	Agile	</option><option class='bv-tag-tag' value = '	JMP software	' data-class='color-f3e395'>	JMP software	</option></optgroup><optgroup label = 'Programming'><option class='bv-tag-tag' value = '	PHP	' data-class='color-f3e395'>	PHP	</option><option class='bv-tag-tag' value = '	CSS	' data-class='color-f3e395'>	CSS	</option><option class='bv-tag-tag' value = '	CSS+	' data-class='color-f3e395'>	CSS+	</option><option class='bv-tag-tag' value = '	HTML	' data-class='color-f3e395'>	HTML	</option><option class='bv-tag-tag' value = '	Java	' data-class='color-f3e395'>	Java	</option><option class='bv-tag-tag' value = '	Python	' data-class='color-f3e395'>	Python	</option><option class='bv-tag-tag' value = '	Ruby	' data-class='color-f3e395'>	Ruby	</option><option class='bv-tag-tag' value = '	Wolfram	' data-class='color-f3e395'>	Wolfram	</option><option class='bv-tag-tag' value = '	SQL	' data-class='color-f3e395'>	SQL	</option><option class='bv-tag-tag' value = '	CPU Architecture	' data-class='color-f3e395'>	CPU Architecture	</option><option class='bv-tag-tag' value = '	Data Structures	' data-class='color-f3e395'>	Data Structures	</option><option class='bv-tag-tag' value = '	Computer networking	' data-class='color-f3e395'>	Computer networking	</option></optgroup><optgroup label = 'Biomedical'><option class='bv-tag-tag' value = '	Anesthesia units	' data-class='color-f3e395'>	Anesthesia units	</option><option class='bv-tag-tag' value = '	surgical lasers	' data-class='color-f3e395'>	surgical lasers	</option><option class='bv-tag-tag' value = '	autotransfusion units	' data-class='color-f3e395'>	autotransfusion units	</option><option class='bv-tag-tag' value = '	ventilators	' data-class='color-f3e395'>	ventilators	</option><option class='bv-tag-tag' value = '	heart-lung bypass units	' data-class='color-f3e395'>	heart-lung bypass units	</option><option class='bv-tag-tag' value = '	diagnostic imaging	' data-class='color-f3e395'>	diagnostic imaging	</option><option class='bv-tag-tag' value = '	diagnostic ultrasound	' data-class='color-f3e395'>	diagnostic ultrasound	</option><option class='bv-tag-tag' value = '	hemodialysis units	' data-class='color-f3e395'>	hemodialysis units	</option><option class='bv-tag-tag' value = '	intro-aortic balloon pumps	' data-class='color-f3e395'>	intro-aortic balloon pumps	</option><option class='bv-tag-tag' value = '	cardiology management systems	' data-class='color-f3e395'>	cardiology management systems	</option><option class='bv-tag-tag' value = '	clinical data systems	' data-class='color-f3e395'>	clinical data systems	</option><option class='bv-tag-tag' value = '	Radiography	' data-class='color-f3e395'>	Radiography	</option><option class='bv-tag-tag' value = '	Ultrasonics	' data-class='color-f3e395'>	Ultrasonics	</option></optgroup><optgroup label = 'Design'><option class='bv-tag-tag' value = '	Adobe Photoshop	' data-class='color-f3e395'>	Adobe Photoshop	</option><option class='bv-tag-tag' value = '	Adobe Illustrator	' data-class='color-f3e395'>	Adobe Illustrator	</option><option class='bv-tag-tag' value = '	Adobe InDesign	' data-class='color-f3e395'>	Adobe InDesign	</option><option class='bv-tag-tag' value = '	Adobe After Effects	' data-class='color-f3e395'>	Adobe After Effects	</option><option class='bv-tag-tag' value = '	Adobe Premiere	' data-class='color-f3e395'>	Adobe Premiere	</option><option class='bv-tag-tag' value = '	CATIA V5	' data-class='color-f3e395'>	CATIA V5	</option><option class='bv-tag-tag' value = '	Alias	' data-class='color-f3e395'>	Alias	</option><option class='bv-tag-tag' value = '	Corel Draw	' data-class='color-f3e395'>	Corel Draw	</option><option class='bv-tag-tag' value = '	3DS Max	' data-class='color-f3e395'>	3DS Max	</option></optgroup><optgroup label = 'Planning'><option class='bv-tag-tag' value = '	Blueprint	' data-class='color-f3e395'>	Blueprint	</option><option class='bv-tag-tag' value = '	Technical Drawing	' data-class='color-f3e395'>	Technical Drawing	</option><option class='bv-tag-tag' value = '	Construction	' data-class='color-f3e395'>	Construction	</option></optgroup><optgroup label='Software'><option class='bv-tag-tag' value = '	Autodesk	' data-class='color-f3e395'>	Autodesk	</option><option class='bv-tag-tag' value = '	Inventor	' data-class='color-f3e395'>	Inventor	</option><option class='bv-tag-tag' value = '	Inroad	' data-class='color-f3e395'>	Inroad	</option><option class='bv-tag-tag' value = '	Microstation	' data-class='color-f3e395'>	Microstation	</option><option class='bv-tag-tag' value = '	Geopak	' data-class='color-f3e395'>	Geopak	</option><option class='bv-tag-tag' value = '	Solidworks	' data-class='color-f3e395'>	Solidworks	</option><option class='bv-tag-tag' value = '	AutoCAD	' data-class='color-f3e395'>	AutoCAD	</option><option class='bv-tag-tag' value = '	Sketchup	' data-class='color-f3e395'>	Sketchup	</option><option class='bv-tag-tag' value = '	CAD	' data-class='color-f3e395'>	CAD	</option></optgroup>";
 var origOptionsData;
;( function( window ) {
	
	'use strict';

	/**
	 * based on from https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
	 */
	function hasParent( e, p ) {
		if (!e) return false;
		var el = e.target||e.srcElement||e||false;
		while (el && el != p) {
			el = el.parentNode||false;
		}
		return (el!==false);
	};
	
	/**
	 * extend obj function
	 */
	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
	 * SelectFx function
	 */
	function SelectFx( el, options ) {	
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	/**
	 * SelectFx options
	 */
	SelectFx.prototype.options = {
		// if true all the links will open in a new tab.
		// if we want to be redirected when we click an option, we need to define a data-link attr on the option of the native select element
		newTab : true,
		// when opening the select element, the default placeholder (if any) is shown
		stickyPlaceholder : true,
		// callback when changing the value
		onChange : function( val ) {

			console.log(val);
		}
	}

	/**
	 * init function
	 * initialize and cache some vars
	 */
	SelectFx.prototype._init = function() {
		// check if we are using a placeholder for the native select box
		// we assume the placeholder is disabled and selected by default
		var selectedOpt = this.el.querySelector( 'option[selected]' );
		this.hasDefaultPlaceholder = selectedOpt && selectedOpt.disabled;

		// get selected option (either the first option with attr selected or just the first option)
		this.selectedOpt = selectedOpt || this.el.querySelector( 'option' );

		// create structure
		this._createSelectEl();

		// all options
		this.selOpts = [].slice.call( this.selEl.querySelectorAll( 'li[data-option]' ) );
		
		// total options
		this.selOptsCount = this.selOpts.length;
		
		// current index
		this.current = this.selOpts.indexOf( this.selEl.querySelector( 'li.cs-selected' ) ) || -1;
		
		// placeholder elem
		this.selPlaceholder = this.selEl.querySelector( 'span.cs-placeholder' );

		// init events
		this._initEvents();

		//get default option element data
		origOptionsData = jQuery('.cs-options').last().html();

	}

	/**
	 * creates the structure for the select element
	 */
	SelectFx.prototype._createSelectEl = function() {
		var self = this, options = '', createOptionHTML = function(el) {
			var optclass = '', classes = '', link = '';

			if( el.selectedOpt && !this.foundSelected && !this.hasDefaultPlaceholder ) {
				classes += 'cs-selected ';
				this.foundSelected = true;
			}
			// extra classes
			if( el.getAttribute( 'data-class' ) ) {
				classes += el.getAttribute( 'data-class' );
			}
			// link options
			if( el.getAttribute( 'data-link' ) ) {
				link = 'data-link=' + el.getAttribute( 'data-link' );
			}

			if( classes !== '' ) {
				optclass = 'class="' + classes + '" ';
			}

			return '<li ' + optclass + link + ' data-option data-value="' + el.value + '"><span>' + el.textContent + '</span></li>';
		};

		[].slice.call( this.el.children ).forEach( function(el) {
			if( el.disabled ) { return; }

			var tag = el.tagName.toLowerCase();

			if( tag === 'option' ) {
				options += createOptionHTML(el);
			}
			else if( tag === 'optgroup' ) {
				options += '<li class="cs-optgroup"><span>' + el.label + '</span><ul>';
				[].slice.call( el.children ).forEach( function(opt) {
					options += createOptionHTML(opt);
				} )
				options += '</ul></li>';
			}
		} );

		var opts_el = '<div class="cs-options"><ul class="bv-fullscreen-box-container">' + options + '</ul></div>';
		this.selEl = document.createElement( 'div' );
		this.selEl.className = this.el.className;
		this.selEl.tabIndex = this.el.tabIndex;
		this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + '</span>' + opts_el;
		this.el.parentNode.appendChild( this.selEl );
		this.selEl.appendChild( this.el );
	}

	/**
	 * initialize the events
	 */
	SelectFx.prototype._initEvents = function() {
		var self = this;

		// open/close select
		this.selPlaceholder.addEventListener( 'click', function() {
				self._toggleSelect();
		} );

		// clicking the options
		this.selOpts.forEach( function(opt, idx) {
			opt.addEventListener( 'click', function() {
				self.current = idx;
				self._changeOption();
				// close select elem
				self._toggleSelect();
			} );
		} );

		//clikcing the optgroups
		jQuery(".cs-optgroup").click(function(){
			closeScreenHold = true;

			var childOptions = jQuery(this).children("ul").children('li');
			jQuery(".bv-fullscreen-box-container").empty();
			for(var x=0;x<childOptions.length;x++){
				jQuery(".bv-fullscreen-box-container").append(childOptions[x]);
			}
		})

		// close the select element if the target it´s not the select element or one of its descendants..
		document.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( self._isOpen() && target !== self.selEl && !hasParent( target, self.selEl ) ) {
				self._toggleSelect();
			} 
		} );

		// keyboard navigation events
		this.selEl.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;

			switch (keyCode) {
				// up key
				case 38:
					ev.preventDefault();
					self._navigateOpts('prev');
					break;
				// down key
				case 40:
					ev.preventDefault();
					self._navigateOpts('next');
					break;
				// space key
				case 32:
					ev.preventDefault();
					if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
						self._changeOption();
					}
					self._toggleSelect();
					break;
				// enter key
				case 13:
					ev.stopPropagation();
					ev.preventDefault();
					if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
						self._changeOption();
						self._toggleSelect();
					}
					break;
				// esc key
				case 27:
					ev.preventDefault();
					if( self._isOpen() ) {
						self._toggleSelect();
					}
					break;
			}
		} );
	}

	/**
	 * navigate with up/dpwn keys
	 */
	SelectFx.prototype._navigateOpts = function(dir) {
		if( !this._isOpen() ) {
			this._toggleSelect();
		}

		var tmpcurrent = typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;
		
		if( dir === 'prev' && tmpcurrent > 0 || dir === 'next' && tmpcurrent < this.selOptsCount - 1 ) {
			// save pre selected current - if we click on option, or press enter, or press space this is going to be the index of the current option
			this.preSelCurrent = dir === 'next' ? tmpcurrent + 1 : tmpcurrent - 1;
			// remove focus class if any..
			this._removeFocus();
			// add class focus - track which option we are navigating
			classie.add( this.selOpts[this.preSelCurrent], 'cs-focus' );
		}
	}

	/**
	 * open/close select
	 * when opened show the default placeholder if any
	 */
	SelectFx.prototype._toggleSelect = function() {
		// remove focus class if any..
		// alert('togglingSelect');
		this._removeFocus();

		
		if( this._isOpen() ) {
			if( this.current !== -1 ) {
				// update placeholder text
				this.selPlaceholder.textContent = this.selOpts[ this.current ].textContent;
			}
			if(closeScreenHold){
				closeScreenHold = false;
			}else{
				classie.remove( this.selEl, 'cs-active' );
			}
			
		}
		else {
			if( this.hasDefaultPlaceholder && this.options.stickyPlaceholder ) {
				// everytime we open we wanna see the default placeholder text
				this.selPlaceholder.textContent = this.selectedOpt.textContent;
			}
			classie.add( this.selEl, 'cs-active' );
		}
	}

	/**
	 * change option - the new value is set
	 */
	SelectFx.prototype._changeOption = function() {
		// if pre selected current (if we navigate with the keyboard)...
		if( typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ) {
			this.current = this.preSelCurrent;
			this.preSelCurrent = -1;
		}

		// current option
		var opt = this.selOpts[ this.current ];

		// update current selected value
		this.selPlaceholder.textContent = opt.textContent;
		
		// change native select element´s value
		this.el.value = opt.getAttribute( 'data-value' );

		// remove class cs-selected from old selected option and add it to current selected option
		var oldOpt = this.selEl.querySelector( 'li.cs-selected' );
		if( oldOpt ) {
			classie.remove( oldOpt, 'cs-selected' );
		}
		classie.add( opt, 'cs-selected' );

		// if there´s a link defined
		if( opt.getAttribute( 'data-link' ) ) {
			// open in new tab?
			if( this.options.newTab ) {
				window.open( opt.getAttribute( 'data-link' ), '_blank' );
			}
			else {
				window.location = opt.getAttribute( 'data-link' );
			}
		}

		// callback
		this.options.onChange( this.el.value );
		alert(this.el.value);
		if(jQuery('.bv-tag-selection-blank').length > 0){
			modItem = jQuery('.bv-tag-selection-blank').last();
			jQuery(modItem).removeClass("bv-tag-selection-blank").addClass('bv-tag-selection-selected');
			jQuery(modItem).last().children('span').text();
			jQuery('.cs-options').last().html(origOptionsData);
		}
	}

	/**
	 * returns true if select element is opened
	 */
	SelectFx.prototype._isOpen = function(opt) {
		return classie.has( this.selEl, 'cs-active' );
	}

	/**
	 * removes the focus class from the option
	 */
	SelectFx.prototype._removeFocus = function(opt) {
		var focusEl = this.selEl.querySelector( 'li.cs-focus' )
		if( focusEl ) {
			classie.remove( focusEl, 'cs-focus' );
		}
	}

	/**
	 * add to global namespace
	 */
	window.SelectFx = SelectFx;

} )( window );