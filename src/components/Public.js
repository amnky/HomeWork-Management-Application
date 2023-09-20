import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
            <Link to="/login">Student Login</Link>
                
            </header>
            <main className="public__main">
            <h1>Welcome to <span className="nowrap">HomeWork Management Application</span></h1>
            <br />
            <p>Complete info about this website:</p><br />
            <p>Roles: Admin, Manager, Students</p>
            <br />
            <p>ADMIN: admin can perform all CRUD operation. He/she has access to create user,<br />
            update the user password, change the role of user,delete the user. <br />
            admin can also see all the students and managers data.
            </p>
            <br />
            <p>MANAGER:Manager can also perform all these above operations except deleting the users.</p>
            <br />
            <p>STUDENTS:students can complete their assigned homework and submit it on given time.</p>

               
            </main>
            <footer>
            
            <address className="public__addr">
            <a href="tel:+918724866160">+918724866160</a>
                <br />
                    email:amanyadav23421@gmail.com<br />
                    
                </address>
                <br />
                <p>Developed and Designed by Aman Yadav</p>
            </footer>
        </section>

    )
    return content
}
export default Public