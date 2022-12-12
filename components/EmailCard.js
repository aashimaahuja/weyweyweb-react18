export default function EmailCard({ name, subject, email , descripton, date }) {

  const handleClick = () => {

  }
  
  return (
        <li onClick={handleClick}>
            <div>{name}{email}</div>
            <div>{subject}</div>
            <div>{description}</div>
            <div>{date}</div>
        </li>
        
    )
}
