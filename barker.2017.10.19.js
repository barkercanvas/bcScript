

//check to see if jQuery is there, if not - Load it!
if (typeof jQuery == 'undefined' || typeof jQuery === undefined || typeof jQuery === null) {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
    jqTag.type = 'text/javascript';
    jqTag.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
    headTag.appendChild(jqTag);
    jqTag.onload = myJQueryCode;
} else {
    myJQueryCode();
}

//Absolute HTTPS URL of the CSS
var cssURL = 'https://instructure-uploads-apse2.s3-ap-southeast-2.amazonaws.com/account_108380000000000001/attachments/12548/firebird%2005.css';

//function to load the CSS into the iframe
function loadTheCSS(){
    var $iframe = $('iframe[title="Rich Text Area. Press ALT+F8 for help."]');
    var cssHTML = '<link rel="stylesheet" type="text/css" href="' + cssURL + '">';
    $iframe.ready(function() {
        $iframe.contents().find("body").append(cssHTML);
    });
}

//RCE CSS loader 5,7,10 Sec
function loadCSS_delay(){
    console.log('Staring the delay...');
    setTimeout(function() {
        loadTheCSS();
        console.log('5sec');
    }, 5000);
    setTimeout(function() {
        loadTheCSS();
        console.log('7sec');
    }, 7000);
    setTimeout(function() {
        loadTheCSS();
        console.log('10sec');
    }, 10000);
    //====End RCE CSS load timeouts=======
}

//Replace function
(function($){
    '$:nomunge'; // Used by YUI compressor.

    $.fn.replaceText = function( search, replace, text_only ) {
        return this.each(function(){
            var node = this.firstChild,
                val,
                new_val,
                remove = [];

            if ( node ) {
                do {
                    if ( node.nodeType === 3 ) {
                        val = node.nodeValue;
                        new_val = val.replace( search, replace );
                        if ( new_val !== val ) {
                            if ( !text_only && /</.test( new_val ) ) {
                                $(node).before( new_val );
                                remove.push( node );
                            } else {
                                node.nodeValue = new_val;
                            }
                        }
                    }
                } while ( node = node.nextSibling );
            }
            remove.length && $(remove).remove();
        });
    };

})(jQuery);

//Main function
function myJQueryCode() {
    $(document).ready(function(){
        loadCSS_delay();

        //Applies to all courses in Canvas



        //CLASSES
        // Replace Sections with Classes
        $("a").replaceText( "Sections", "Classes" );
        $("h2").replaceText( "Course Sections", "Classes" );
        $("form.h3").replaceText( "Section", "Class" );
        $("button").replaceText( "Section", "Class" );
        $("label").replaceText( "Section", "Class" );
        $("label").replaceText( "section", "class" );
        $("option").replaceText( "Section", "Class" );
        $("#section_select").replaceText( "All Sections", "All Classes" );
        $(".text-right-responsive").replaceText( "Select a section", "Select a class" );

        function LoopClassForeverMod() {
            $("th").replaceText( "Section", "Class" );
            $("span").replaceText( "Section", "Class" );
        }
        var assign_int = self.setInterval(function(){LoopClassForeverMod()},500);

        //UNIT
        //Replace Module on menu and Module page
        $("a").replaceText( "Modules", "Units" );
        $("li").replaceText( "Modules", "Units" );
        $("h2").replaceText( "Modules", "Units" );
        $(".btn").replaceText( "Module", "Unit" );
        $("span.ellipsible").replaceText( "Modules", "Units" );
        $("#context_module_name").attr("placeholder", "Unit Name");
        $("option").replaceText("Module", "Unit");
        $("b").replaceText("module", "unit");

        //Popup add Module screen requires loop to replace text
        if (window.location.href.indexOf("/modules") > -1) {
            function LoopTopicForeverMod() {
                $("span.ui-dialog-title").replaceText( "Module", "Unit" );
                $("span.ui-button-text").replaceText( "Module", "Unit" );
                $("label").replaceText( "module", "unit" );
                $("option").replaceText("module", "unit");  
            }
            var assign_int = self.setInterval(function(){LoopTopicForeverMod()},500);
        }

        //TASKS
        //Replace Assignments on menu and Assignments page
        $("a").replaceText( "Assignments", "Tasks" );
        $("a").replaceText( "Assignment", "Task" );
        $("li").replaceText( "Assignments", "Tasks" );
        $("h2").replaceText( "Assignments", "Tasks" );
        $(".btn").replaceText( "Assignment", "Task" );
        $("span.ellipsible").replaceText( "Assignments", "Tasks" );
        $("label").replaceText( "Assignments", "Tasks" );
        $("label").replaceText( "Assignment", "Task" );
        $("option").replaceText( "Assignments", "Tasks" );
        $("div.form-column-left").replaceText( "Assignment", "Task" );
        $("#search_term").attr("placeholder", "Search for Task");
        $("#assignment_name").attr("placeholder", "Task Name");

        //Assignments page has requires loop to replace text
        if (window.location.href.indexOf("/assignments") > -1) {
            function LoopTaskForeverAsgn() {
                $("a.element_toggler.accessible-toggler").replaceText( "Assignments", "Tasks" );
                $("li").replaceText( "Assignments", "Tasks" );
                $("h2").replaceText( "Assignments", "Tasks" );
                $(".btn").replaceText( "Assignment", "Task" );
                $("label").replaceText( "Assignments", "Tasks" );
                $("label").replaceText( "Assignment", "Task" );
                $("option").replaceText( "Assignments", "Tasks" );
                $("div.form-column-left").replaceText( "Assignment", "Task" );
                $("#search_term").attr("placeholder", "Search for Task");
                $("#assignment_name").attr("placeholder", "Task Name");
            }
            var assign_int = self.setInterval(function(){LoopTaskTaskForeverAsgn();},500);
        }

        //FEEDBACK
        //Replace Marks on menu and Marks page
        $("a").replaceText( "Marks", "Feedback" );
        $("li").replaceText( "Marks", "Feedback" );
        $("h2").replaceText( "Marks", "Feedback" );
        $("div").replaceText( "Mark:", "Result:" );
        $("span.ellipsible").replaceText( "Marks", "Feedback" );
        $(".btn").replaceText( "marks", "results" );

        if (window.location.href.indexOf("/grades") > -1) {
            //Replace text for pending grades
            $("small").replaceText( "Your instructor is working on marks", "Your teacher is assessing your work" );
            $("small").replaceText( "While your instructor is working on marks, mark and comment information is unavailable", "Whilst this is happening, feedback is unavailable" );
        }
    });
}