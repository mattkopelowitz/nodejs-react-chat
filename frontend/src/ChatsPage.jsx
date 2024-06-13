import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='6b76a5c1-3c90-45b9-baf0-6288d2b6a330'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            ></PrettyChatWindow>
        </div>
    )
};

export default ChatsPage;