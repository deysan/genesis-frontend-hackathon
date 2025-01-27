import {Card, Image} from "react-bootstrap";

import css from './Profile.module.scss';

const ProfileInfo = function () {

    return (
        <Card className="text-center">
            <Card.Body>
                <Image src="https://off-bot.ru/data/avatars/l/0/165.jpg" roundedCircle/>
                <Card.Title>Agent Smith</Card.Title>
                <Card.Text>
                    Email: agent.smith@delta.com
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProfileInfo;