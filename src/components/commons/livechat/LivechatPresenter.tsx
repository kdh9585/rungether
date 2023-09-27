import * as S from "./LivechatStyles";
import { v4 as uuidv4 } from "uuid";
import { IPropsLiveChatUI } from "./LivechatTypes";

export default function LivechatUI(props: IPropsLiveChatUI) {
  return (
    <S.TalkWrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.TalkHeader />
      <S.TalkContents>
        {props.data?.fetchChatHistory.map((el) => (
          <div key={uuidv4()}>
            {el.user.id === props.userId ? (
              <S.Right>
                <S.Text ref={props.messagesEndRef}>{el.message}</S.Text>
              </S.Right>
            ) : (
              <S.Left>
                <S.Text
                  ref={props.messagesEndRef}
                >{`${el.user.name}: ${el.message}`}</S.Text>
              </S.Left>
            )}
          </div>
     
        ))}
        {props.resultMsg.map((el) => (
          <div key={uuidv4()}>
            {el[2] === props.userId ? (
              <S.Right>
                <S.Text ref={props.messagesEndRef}>{el[1]}</S.Text>
              </S.Right>
            ) : (
              <S.Left>
                <S.Text
                  ref={props.messagesEndRef}
                >{`${el[0]}: ${el[1]}`}</S.Text>
              </S.Left>
            )}
          </div>
        ))}
      </S.TalkContents>
      {props.accessToken ? (
        <S.TalkWrite
          placeholder="궁금한 점을 물어보세요! 실시간으로 답변해드립니다!"
          onKeyDown={props.onKeyDown}
          type="text"
          {...props.register("contents", { required: true })}
        />
      ) : (
        <S.TalkWrite
          placeholder="로그인 후 채팅이 가능합니다!"
          disabled={true}
        />
      )}
    </S.TalkWrapper>
  );
}
