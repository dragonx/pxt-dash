'use strict';

console.log("console main.ts!");

//% color=190 weight=100
namespace dash {

    console.log("console namespace dash!");

    function promiseWebSocket(ws: any) {
        /*
        return new Promise((resolve: any, reject: any) => {
            ws.onopen = (e: any) => { resolve(ws); }
            ws.onerror = (e: any) => { reject(e); }
            ws.onclose = (e: any) => { reject(e); }
        });
        */
    }

    function promiseRobot(robot: any) {
        // TODO: This probably belongs in the robot.
        /*
        return new Promise((resolve: any, reject: any) => {
            robot.onconnect = (e: any) => resolve(robot);
            robot.connect();
        });
        */
    }

    //% block_id=get_robot
    //% block="get|user %u, robot %r"
    export function getRobot(userName: string, robotName: string) {
        /*
        var wsPromise: Promise<Any>;
        if (!robotName) {
            var err = "No robot name provided.";
            alert(err);
            return Promise.reject(err);
        }
        if (userName) {
            var request = new Request('https://9z8ye7aazi.execute-api.us-west-2.amazonaws.com/alpha/ConnectionInfo?Name=' +
                userName)
            wsPromise = fetch(request)
                .then((result: any) => {
                    return result.json();
                }).then((result: any) => {
                    var connections = result['Item']['Connections'];
                    var ws_address = connections[0]['connection'];
                    // TODO: Promise wrapper for WebSocket.
                    // Then we can get the robot here and return it.
                    return promiseWebSocket(new WebSocket(ws_address));
                });
        } else {
            wsPromise = promiseWebSocket(new WebSocket('ws://localhost:8080'))
        }
        return wsPromise.then((ws: any) => {
            return promiseRobot(new RobotInterface(ws, robotName))
        }, (err: any) => {
            alert("Could not connect to bluetooth router.");
            throw err;
        });
        */
    }
}