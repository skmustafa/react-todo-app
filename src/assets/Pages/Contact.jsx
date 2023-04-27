import PageTop from '../components/PageTop'



const Contact = () => {
    return (
        <><PageTop title={'Contact'}/>

            <p>Contact Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia unde magni !</p>


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1912327988102!2d72.8256860751968!3d18.96716005538041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40286f418d%3A0x6e6b2e24d141231e!2sMasterfax%20Enterprises!5e0!3m2!1sen!2sin!4v1682591358221!5m2!1sen!2sin"
             width='100%'
            height="450"
               style={{border:'0',borderRadius:'0.5rem'}}
               allowfullscreen={true} 
               loading="lazy"></iframe>

        </>
    )
}

export default Contact