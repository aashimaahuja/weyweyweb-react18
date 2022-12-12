export default function EmailList() {
    const emails = fetch(`/emails/${userId}`)
  
    return (
        <div>
            {emails.map(email => {
                const {name, email,subject, description, date} = email
                return (
                    <li>
                        <div>{name}{email}</div>
                        <div>{subject}</div>
                        <div>{description}</div>
                        <div>{date}</div>
                    </li>
                )
            })}
        </div>
    )
}