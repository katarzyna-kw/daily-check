import '../App.css';

function Survey() {
  const surveyGoesHere = 'survey goes here';
  return (
    <div className="wrapper-survey">
        <p>
        {surveyGoesHere}
        </p>
        <form>
          <label>
            Date: 
          </label>
          <input type="text" />
          <label>
            Morning Mood: 
          </label>
          <input type="text" />

        </form>
    </div>
  );
}

export default Survey;