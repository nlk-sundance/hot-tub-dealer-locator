//-----------------------------------
//CORPORATE NAVIGATION:
//-----------------------------------
function goto_URL(object) {
    window.location.href = object.options[object.selectedIndex].value;
}

function printTopNav() {
	document.write('<TABLE WIDTH="760" CELLPADDING="0" CELLSPACING="0" BORDER="0"><TR><TD WIDTH="228" ALIGN="LEFT" VALIGN="TOP"><IMG SRC="' + BASEDIR + '/img/Clear.gif" WIDTH="210" HEIGHT="42" HSPACE="18" VSPACE="0" BORDER="0" ALT="Sundance Spas"><BR><A HREF="http://se.sundancespas.com"><IMG SRC="' + BASEDIR + '/img/Logo.gif" WIDTH="210" HEIGHT="30" HSPACE="18" VSPACE="0" BORDER="0" ALT="Sundance Spas"></A><BR></TD><TD WIDTH="532" ALIGN="LEFT" VALIGN="TOP"><DIV ALIGN="RIGHT" STYLE="padding-right: 6px; padding-top: 10px;"><FORM STYLE="margin-bottom: 0px;"><SELECT NAME="selectName" onChange="goto_URL(this.form.selectName)" ID="dropdown"><OPTION VALUE="#">&nbsp;&nbsp;Spr�k:&nbsp;&nbsp;<OPTION VALUE="http://de.sundancespas.com">&nbsp;&nbsp;&nbsp;&nbsp;Deutsch</OPTION><OPTION VALUE="http://www.sundancespas.com">&nbsp;&nbsp;&nbsp;&nbsp;English</OPTION><OPTION VALUE="http://es.sundancespas.com">&nbsp;&nbsp;&nbsp;&nbsp;Espa�ol</OPTION><OPTION VALUE="http://ca.sundancespas.com">&nbsp;&nbsp;&nbsp;&nbsp;Fran�ais (Canadien)</OPTION><OPTION VALUE="http://fr.sundancespas.com">&nbsp;&nbsp;&nbsp;&nbsp;Fran�ais (Europ�en)</OPTION><OPTION VALUE="http://it.sundancespas.com">&nbsp;&nbsp;&nbsp;&nbsp;Italiano</OPTION><OPTION VALUE="http://nl.sundancespas.com">&nbsp;&nbsp;&nbsp;&nbsp;Nederlands</OPTION><OPTION VALUE="http://no.sundancespas.com">&nbsp;&nbsp;&nbsp;&nbsp;Norsk</OPTION><OPTION VALUE="http://pt.sundancespas.com">&nbsp;&nbsp;&nbsp;&nbsp;Portugu�s</OPTION><OPTION VALUE="http://se.sundancespas.com">&nbsp;&nbsp;&nbsp;&nbsp;Svenska</OPTION></SELECT>&nbsp;&nbsp;&nbsp;&nbsp;<INPUT TYPE="button" ID="Button" VALUE="Hitta en �terf�rs�ljare" onClick="location.href=\'http://se.sundancespas.com/Retailers\'"></DIV></FORM></TD></TR><TR><TD COLSPAN="2"><DIV ALIGN="RIGHT" STYLE="padding-right: 6px; padding-top: 0px;">');
	if (section == "AboutUs" ) {
		document.write('<b><A HREF="http://se.sundancespas.com/AboutUs/AboutUs.html" CLASS="nav">OM OS</A>&nbsp;&nbsp;&nbsp;&nbsp;</b>');
	}
	else {
		document.write('<A HREF="http://se.sundancespas.com/AboutUs/AboutUs.html" CLASS="nav">OM OS</A>&nbsp;&nbsp;&nbsp;&nbsp;');
	}	
	if (section == "RequestLit" ) {
		document.write('<b><A HREF="http://se.sundancespas.com/RequestLiterature/RequestLiterature.html" CLASS="nav">BEST�LL EN BROSCHYR</A>&nbsp;&nbsp;&nbsp;&nbsp;</b>');
	}
	else {
		document.write('<A HREF="http://se.sundancespas.com/RequestLiterature/RequestLiterature.html" CLASS="nav">BEST�LL EN BROSCHYR</A>&nbsp;&nbsp;&nbsp;&nbsp;');
	}
	if (section == "CustomerCare" ) {
		document.write('<b><A HREF="http://se.sundancespas.com/CustomerCare/CustomerCare.html" CLASS="nav">KUNDTJ�NST</A>&nbsp&nbsp;&nbsp;</b>');
	}
	else {
		document.write('<A HREF="http://se.sundancespas.com/CustomerCare/CustomerCare.html" CLASS="nav">KUNDTJ�NST</A>&nbsp&nbsp;&nbsp;&nbsp;');
	}
	if (section == "Contact" ) {
		document.write('<b><A HREF="http://se.sundancespas.com/Contact/Contact.html" CLASS="nav">KONTAKT</A></b><BR></TD></TR></TABLE>');
	}
	else {
		document.write('<A HREF="http://se.sundancespas.com/Contact/Contact.html" CLASS="nav">KONTAKT</A><BR></TD></TR></TABLE>');
	}
}
//END--------------------------------
