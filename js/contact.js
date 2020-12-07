$(document).ready(function() {
    $('form#contact').submit(function(e) {
        e.preventDefault();

        $('#inputContainer')
            .removeClass()
            .addClass('loading');

        var sendgridjs_url = 'https://insidelabs-contact.herokuapp.com/send';
        //var sendgridjs_url = 'http://insidelabs-contact.herokuapp.com/send';
        var sendgridjs_to = 'talkto@insidelabs.tech';
        var sendgridjs_subject = 'New contact request | insidelabs.tech';
        var name = $('#contact #name').val();
        var companyName = $('#contact #companyName').val();
        var emailAddress = $('#contact #email').val();
        var message = $('#contact #message').val();

        var sendgridjs_html = buildHtml(name, companyName, emailAddress, message);

        var email = {
            to: sendgridjs_to,
            subject: sendgridjs_subject,
            html: sendgridjs_html
        };
        $.post(sendgridjs_url, email, function(response) {
            if (response.success) {
                $('#inputContainer')
                    .removeClass()
                    .addClass('done');
            } else {
                $('#inputContainer')
                    .removeClass()
                    .addClass('error');
            }
        });

        return false;
    });
});

function buildHtml(name, companyName, email, message) {
    return `
		<div>
			<h3>New contact request at insidelabs.tech:</h3>
			<br/>
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Company name:</strong> ${companyName}</p>
			<p><strong>Email:</strong> ${email}</p>
			<br/>
			<p><strong>Message:</strong></p>
			<p>${message}</p>
		</div>
	`;
}
