import React from 'react'
import axios from 'axios';

class Courses extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortDirection: true,                 // for sorting
      courses: []

    }
  }
  componentDidMount() {                     // to get data from api
    axios.get('/api/courses')
      .then(response => {
        // console.log(response.data) 
        const limitedCourses = []
        for (var i = 0; i < 100; i++) {
          limitedCourses.push(response.data.courses[i])
        }
        this.setState({
          courses: limitedCourses
        })
        // this.setState({"courses":response.data.courses})

      })
      .catch(error => {
        console.log(error)
      })
  }
  // sorting                                                          
  sortColumn = (columnName) => {
    // console.log(dataType)
    this.setState({
      sortDirection: !this.state.sortDirection
    })
    this.sortNumberColumn(this.state.sortDirection, columnName)
  }

  sortNumberColumn = (sort, columnName) => {
    if (columnName === "Length") {
      this.setState({
        courses: this.state.courses.sort((p1, p2) => {
          return sort ? (Number(p1[columnName]) - Number(p2[columnName])) : (Number(p2[columnName]) - Number(p1[columnName]))
        })
      })
    }
    else if (columnName === "Next Session Date") {
      this.setState({
        courses: this.state.courses.sort((p1, p2) => {
         var a= new Date(p1[columnName].date)
         var b =new Date(p2[columnName].date)
         return a-b;
         
        })
      })
    }
   
  }
  // Filtering
  FilterCourses = (courseMatch) => {
    const FilterCoursesNew = this.state.courses.filter((course) => {
      // if(course.Provider=== courseMatch ){
      //       return course.Provider;            
      // }   
      return course.Provider === courseMatch;
    })
    this.setState({
      courses: FilterCoursesNew
    })
  }
  render() {

    return (
      <div>
        {/* dropdown for filtering   */}
        <div >
          <select id="filtering" onChange={(e) => this.FilterCourses(e.target.value)}>
            <option value="" >Filter</option>
            <option value="Complexity Explorer">Complexity Explorer</option>
            <option value="Coursera">Coursera</option>
            <option value="Desire2Learn">Desire2Learn</option>
            <option value="EdCast">EdCast</option>
            <option value="Edraak">Edraak</option>
            <option value="edX">edX</option>
            <option value="EMMA">EMMA</option>
            <option value="First Business MOOC">First Business MOOC</option>
            <option value="France Université Numerique">France Université Numerique</option>
            <option value="Georgia Tech Online Master of Science in Computer Science">Georgia Tech Online Master of Science in Computer Science</option>
            <option value="FutureLearn">FutureLearn</option>
            <option value="gacco">gacco</option>
            <option value="IONIS">IONIS</option>
            <option value="iversity">iversity</option>
            <option value="Janux">Janux</option>
            <option value="Kadenze">Kadenze</option>
            <option value="Miríada">Miríada X</option>
            <option value="MongoDB University">MongoDB University</option>
            <option value="MOOC-ED">MOOC-ED</option>
            <option value="MRUniversity">MRUniversity</option>
            <option value="NovoED">NovoED</option>
            <option value="NPTEL">NPTEL</option>
            <option value="Open Education by Blackboard">Open Education by Blackboard</option>
            <option value="Open2Study">Open2Study</option>
            <option value="OpenClassrooms">OpenClassrooms</option>
            <option value="openHPI">openHPI</option>
            <option value="OpenLearning">OpenLearning</option>
            <option value="openSAP">openSAP</option>
            <option value="Polimi OPEN KNOWLEDGE">Polimi OPEN KNOWLEDGE</option>
            <option value="Rwaq (رواق)">Rwaq (رواق)</option>
            <option value="Stanford OpenEdx">Stanford OpenEdx</option>
            <option value="Udacity">Udacity</option>
            <option value="Udemy">Udemy</option>
            <option value="UPV [X]">UPV [X]</option>
            <option value="World Science U">World Science U</option>
          </select>
          <div className="sortBy">
            <span><label>Sort By</label></span>
            <span>
              <button id="length" onClick={() => this.sortColumn('Length')}>Length</button>
            </span>
            <span>
              {/* <button onClick={() => this.sortColumn('Next Session Date')}>Next Session Date</button> */}
            </span>
          </div>

        </div>
        <div>
          <table className='content-table'>
            <thead>
              <tr className='trow'>
                <td>Course Id</td>
                <td>Course Name</td>
                <td>Provider</td>
                <td>Universities/Institutions</td>
                <td>Parent Subject</td>
                <td>Child Subject</td>
                <td>Url</td>
                <td>Next Session Date</td>
                <td>Length</td>
                <td>Video(Url)</td>
              </tr>
            </thead>
            <tbody className='tbody' >
              {
                this.state.courses.map(row => (
                  <tr >
                    <td>{row["Course Id"]}</td>
                    <td>{row["Course Name"]}</td>
                    <td>{row["Provider"]}</td>
                    <td>{row["Universities/Institutions"]}</td>
                    <td>{row["Parent Subject"]}</td>
                    <td>{row["Child Subject"]}</td>
                    <td>{row["Url"]}</td>
                    <td>{row["Next Session Date"]}</td>
                    <td>{row["Length"]}</td>
                    <td>{row["Video(Url)"]}</td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
      </div>

    )
  }

}

export default Courses;
