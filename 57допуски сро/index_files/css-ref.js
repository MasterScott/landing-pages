ltSiteSettings.change    = function()  
{
	/*var bannerCSS = this.banner != 'none' ? { 'background-image'    : 'url(/' + this.banner + ')',
									'background-color' : 'transparent',
									'background-position' : 'center',
									'background-repeat'   : 'no-repeat'}
								: { 'height'              : '7px',
									'background-image'          : 'none'
									};
	var bgCSS =  this.bg != 'none' ? {    'background-image'    : 'url(/' + this.bg + ')',
										
										  'background-position' : 'left bottom',
										  'background-repeat'   : 'no-repeat'   }
									: { 'background-image' : 'none' };

	var bannerWelcomeCSS =  jQuery.extend( true, { 'background-color'    : 'transparent' }, bannerCSS);
	var bannerChatCSS = jQuery.extend( true, { 'background-color'    : 'transparent' }, bannerCSS);
	var bgWelcomeCSS = jQuery.extend( true, { 'background-color'    : this.color }, bgCSS);
	var bgChatCSS	= jQuery.extend( true, { 'background-color'    : this.color_chat }, bgCSS);

	var colorChatCSS = { 'background-color'    : this.color_chat,
						 'background-image'    : 'none' };

	var operatorBlockCSS = jQuery.extend( true, colorChatCSS, { 'background-image' : 'url(/93d68ecd33af31ad2b802ab843ff98a2.png)',
												  'background-position' : 'left bottom',
												  'background-repeat' : 'repeat-x' }  ); квывавыаыва*/

	this.banner = (this.banner === 'none' || this.banner === '') ? '' : this.banner;
	this.welcome_banner = (this.welcome_banner === 'none' || this.welcome_banner === '') ? '' : this.welcome_banner;
	this.offline_banner = (this.offline_banner === 'none' || this.offline_banner === '' ) ? '' : this.offline_banner;

	this.bg = (this.bg === 'none' || this.bg === '') ? '' : ('/' + this.bg);
	this.welcome_bg = (this.welcome_bg === 'none' || this.welcome_bg === '') ? '' : ('/' + this.welcome_bg);
	this.offline_bg = (this.offline_bg === 'none'|| this.offline_bg === '') ? '' : ('/' + this.offline_bg);

	var hexToR = function(h) {
		return parseInt((cutHex(h)).substring(0,2),16)
	};
	var hexToG = function(h) {
		return parseInt((cutHex(h)).substring(2,4),16)
	};
	var hexToB = function(h) {
		return parseInt((cutHex(h)).substring(4,6),16)
	};
	var cutHex = function(h) {
		return (h.charAt(0)=="#") ? h.substring(1,7):h
	};
	var lumen = function(h) {
		return Math.sqrt( Math.pow( 0.241 * hexToR(h)/255.0, 2 ) +
												Math.pow( 0.691 * hexToG(h)/255.0, 2 ) +
												Math.pow( 0.068 * hexToB(h)/255.0, 2 ) );
	};

	
	/*var colorFont = lumen(this.color) > 0.65 ? 'light' : 'dark';
	var colorWFont = lumen(this.welcome_color) > 0.65 ? 'light' : 'dark';
	var colorOffFont = lumen(this.offline_color) > 0.65 ? 'light' : 'dark';*/
	
	var colorFont = lumen(this.color) > 0.5 ? 'light' : 'dark';
	var colorWFont = lumen(this.welcome_color) > 0.5 ? 'light' : 'dark';
	var colorOffFont = lumen(this.offline_color) > 0.5 ? 'light' : 'dark';


  if (this.widget_version == 2) {
    window.livetexWelcomeView.widgetsNew = true;
  }
	
	if (window.liveTexVWelcome)
	{

		livetexWelcomeView.banner( this.welcome_banner, this.welcome_banner_link ? this.welcome_banner_link : false );
		livetexWelcomeView.bgimage( this.welcome_bg);
		livetexWelcomeView.bgcolor(this.welcome_color);
		livetexWelcomeView.infotext(this.welcome);
		livetexWelcomeView.chatBright(colorWFont);
		
	}
	else if (window.liveTexVChat)
	{

		livetexWelcomeView.banner( this.banner, this.banner_link ? this.banner_link : false );
		livetexWelcomeView.bgimage( this.bg);
		livetexWelcomeView.bgcolor(this.color);
		livetexWelcomeView.chatBright(colorFont);
		livetexWelcomeView.operatorSize( this.thumb ? 'small' : 'big');
		if (this.consult) {
      livetexWelcomeView.show('rate');
    } else {
      livetexWelcomeView.hide('rate');
    }

		//livetexWelcomeView.hide('spinner');

	}
	else
	{
		livetexWelcomeView.banner( this.offline_banner, this.offline_banner_link ? this.offline_banner_link : false );
		livetexWelcomeView.bgimage( this.offline_bg );
		livetexWelcomeView.bgcolor(this.offline_color);
		livetexWelcomeView.chatBright(colorOffFont);
		if (this.offline_text == 'none') this.offline_text = ' ';
		livetexWelcomeView.infotext(this.offline_text);
		//livetexWelcomeView.chatBright( 'dark' );
    
    if (this.offline_type === undefined) {
      this.offline_type = 0;
      this.offline_required_fields = 1;
    }
    livetexWelcomeView.setRequestFields(this.offline_type);
    livetexWelcomeView.setRequiredFields(this.offline_required_fields);
	}

	if (!ltSiteSettings.abuse) {
		livetexWelcomeView.hideAbuse();
	}

	livetexWelcomeView.show('chat');

};
if (window.livetexWelcomeView) ltSiteSettings.change();