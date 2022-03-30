import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import ProfilePage from "./SubDocs/ProfilePage";
import UpdateProfile from "./SubDocs/UpdateProfile";

const Profile = () => {
  return (
    <Container>
      <Routes>
        <Route exact path="/*" element={<ProfilePage />} />
        <Route exact path="/update-profile" element={<UpdateProfile />} />
      </Routes>
    </Container>
  );
};

export default Profile;
