//  in app component code 

/* <Props
        name="Sachin Gavali"
        age={19}
        isVote={false}
        hobbies={['coding', 'reading', 'sleeping', 'playing']}
      >
        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem quas dolore asperiores necessitatibus provident odio aspernatur, nam alias dignissimos magni deleniti placeat, voluptatem impedit error eius id magnam? Consequuntur.</p>
      </Props> */

const Props = (props) => {
    return (
        <div className="props-card">
            <h1> My Na


                me is {props.name} </h1>
            <h2> My Age is {props.age} </h2>
            {
                console.log(props.isVote)
            }
            <h3> i'm eligible {props.isVote === true ? <p> Yes </p> : <p> No  </p>} </h3>
            <h4> My like to {props.hobbies.map((item) => <p key={Math.random() * 10} > {item} </p>)} </h4>

            <p> {props.children} </p>
        </div>
    )
}

export default Props