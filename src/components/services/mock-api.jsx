
import axios from "axios";

axios.defaults.baseURL = 'https://6488234f0e2469c038fd0ab2.mockapi.io/users';


export async function getTweets() {
    const { data } = await axios('/tweets')
    return data;
};


export async function putTweets(id, dataObj) {
    const { data } = await axios.put(`/tweets/${id}`, dataObj);
    return data;
}

// import axios from 'axios';

// axios.defaults.baseURL = 'https://649b4ef0bf7c145d023a353f.mockapi.io';

// export async function getAllTweets() {
//   const { data } = await axios('/tweets');
//   return data;
// }

// export async function putTweet(id, dataObj) {
//   const { data } = await axios.put(`/tweets/${id}`, dataObj);
//   return data;
// }


//   return (
//     <div>
//       <h1>User Data</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             <p>User: {user.user}</p>
//             <p>Followers: {user.followers}</p>
//             <p>Tweets: {user.tweets}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserComponent;
