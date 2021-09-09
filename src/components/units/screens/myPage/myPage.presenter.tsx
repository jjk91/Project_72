import React from 'react';
import {
  Container,
  ListItemButton,
  ListItemTitle,
  ListItemWrapper,
  Title,
  TitleWrapper,
  UserImage,
  UserInfoEdit,
  UserInfoLeftWrapper,
  UserInfoRightWrapper,
  UserInfoWrapper,
  UserName,
  Wrapper,
} from './myPage.style';
import Icon from 'react-native-vector-icons/Ionicons';
const MyPageUI = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>더보기</Title>
          </TitleWrapper>

          <UserInfoWrapper>
            <UserInfoLeftWrapper>
              <UserImage>
                <Icon size={60} color={'#bdbdbd'} name="person-circle-sharp" />
              </UserImage>
              <UserName>유저이름</UserName>
            </UserInfoLeftWrapper>
            <UserInfoRightWrapper>
              <UserInfoEdit>내 정보 수정</UserInfoEdit>
            </UserInfoRightWrapper>
          </UserInfoWrapper>

          <ListItemWrapper>
            <ListItemTitle>공지사항</ListItemTitle>
            <ListItemButton>
              <Icon
                size={30}
                color={'#bdbdbd'}
                name="md-chevron-forward-sharp"
              />
            </ListItemButton>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItemTitle>이벤트</ListItemTitle>
            <ListItemButton>
              <Icon
                size={30}
                color={'#bdbdbd'}
                name="md-chevron-forward-sharp"
              />
            </ListItemButton>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItemTitle>Q&A</ListItemTitle>
            <ListItemButton>
              <Icon
                size={30}
                color={'#bdbdbd'}
                name="md-chevron-forward-sharp"
              />
            </ListItemButton>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItemTitle>내가 받은 리뷰</ListItemTitle>
            <ListItemButton>
              <Icon
                size={30}
                color={'#bdbdbd'}
                name="md-chevron-forward-sharp"
              />
            </ListItemButton>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItemTitle>나의 활동기록</ListItemTitle>
            <ListItemButton>
              <Icon
                size={30}
                color={'#bdbdbd'}
                name="md-chevron-forward-sharp"
              />
            </ListItemButton>
          </ListItemWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
export default MyPageUI;