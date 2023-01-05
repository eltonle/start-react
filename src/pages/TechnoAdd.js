import { useState } from "react";
export default function TechnoAdd(props) {
  //on  cree getter et setter
  const [techno, setTechno] = useState({
    //trois cles les string
    technoname: "",
    technocategory: "",
    technodescription: "",
  });
  //ici on passe les props
  const { handleAddTechno } = props; // et la on recupere la fonction handleAddTechno aa partir des props

  //fucntion de submition du formulaire
  function handeSubmit(evt) {
    evt.preventDefault();
    handleAddTechno(techno);
    setTechno({
      technoname: "",
      technocategory: "",
      technodescription: "",
    });
  }
  function handleChange(evt) {
    const { name, value } = evt.target;
    setTechno({ ...techno, [name]: value });
  }

  return (
    <div className="techno-add">
      <h1>Add a Techonologie</h1>
      <div>
        <form onSubmit={(evt) => handeSubmit(evt)}>
          <label htmlFor="technoname">Name:</label>
          <br />
          <input
            type="text"
            name="technoname"
            id="technoname"
            value={techno.technoname}
            onChange={(evt) => handleChange(evt)}
          />
          <br />
          <label htmlFor="technocategory">Category:</label>
          <br />
          <select
            name="technocategory"
            id="technocategory"
            value={techno.technocategory}
            onChange={(evt) => handleChange(evt)}
          >
            <option value="">select a catagory</option>
            <option value="front">Front</option>
            <option value="back">Back</option>
            <option value="fullstack"> Fullstack</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label htmlFor="technodescription">Description:</label>
          <br />
          <textarea
            name="technodescription"
            id="technodescription"
            cols="30"
            rows="10"
            value={techno.technodescription}
            onChange={(evt) => handleChange(evt)}
          ></textarea>
          <br />
          <input type="submit" value="Add techno" className="btn" />
        </form>
      </div>
    </div>
  );
}
