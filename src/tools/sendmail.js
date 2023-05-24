const sendMail = ({name, email, subject, message}) => {
  // convert to mailto
  // example: mailto:myubash@gmail.com?subject=Inquiry%20about%20offering&body=Lorem%20ipsum%20sit%20amet%20dolor%0D%0A%0D%0A-%20Your%20name
  const myMail = 'myubash@gmail.com'
  const body = 
  `From: ${email}
${message}
  
- ${name}`
  const uri = encodeURI(`mailto:${myMail}?subject=${subject}&body=${body}`)
  window.open(uri, '_blank');

}

export default sendMail