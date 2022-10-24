/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import {useState} from "react";
import {IUser} from "@dev-ops-meta/core";

export function NxWelcome({ title }: { title: string }) {
  const initUser: IUser = {
    name: "UI User",
    id: "008",
    email: "uiUser@domain.com"
  }
  const [user, setUser] = useState(initUser)

  return (

      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome {title} 👋
            </h1>
            <p>
              {JSON.stringify(user)}
            </p>
          </div>
        </div>
      </div>

  );
}

export default NxWelcome;
