import { createApi } from '@reduxjs/toolkit/query/react';

const api = createApi({
    baseQuery: graphqlRequestBaseQuery({
        url: address + "graphql",
        prepareHeaders(headers, {getState}){
            const { token } = getState().auth 
            if (token){ 
                headers.set('Authorization', "Bearer " + token) 
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        playlistFind:builder.query({
            query: () => ({
                document: `query playlist{
	                    PlaylistFind(query: "[{}]"){
                            _id
                            name
                            description
                            owner {login}
                            tracks {_id url id3 {title artist}}
                        }}`
                    })}),
                login: builder.mutation({
                    query: ({login, password}) => ({
                        document: `
                            query login($login: String!, $password: String!) {
                                login(login: $login, password: $password) 
                            }
                            `,
                        variables: {login, password}})
                }),
                getUserById: builder.query({
                    query: ({_id}) => ({ 
                        document: `query oneUser($query: String){
                            UserFindOne(query: $query){
                                _id login nick avatar{ url }
                            }
                        }`,
                        variables: {query: JSON.stringify([{_id}])}
                    }),
                    providesTags: (result, error, {_id}) => {  
                        return ([{ type: 'User', id: _id}])
                    }
                }),
                setUserNick: builder.mutation({
                    query: ({_id, nick}) => ({
                        document: `
                            mutation setNick($_id:String, $nick:String) {
                                UserUpsert(user: {_id: $_id, nick: $nick}){
                                    _id nick 
                                }
                            }`,
                        variables: {_id, nick}
                    }),
                    invalidatesTags: (result, error, arg) => ([{type: 'User', id: arg._id}])
                }),
                playlistFindOne: builder.query({
                    query: ({_id}) => ({
                        document: `query playlist($query: String){
                            PlaylistFindOne(query: $query){
                                _id
                                owner {login}
                                name
                                tracks {_id url id3 {title artist}}
                          } 
                        }`, variables: {query: JSON.stringify([{_id}])}
                    })
                }), 
                setUserAvatar: builder.mutation({
                    query:({id, avatarId}) => ({
                            document: `mutation setAvatar($id: String, $avatarId:ID){
                                UserUpsert(user:{_id: $id, avatar: {_id: $avatarId}}){
                                    _id, avatar{
                                        _id 
                                    }
                                }
                            }`, variables: {id, avatarId}
                    })
                }),
                setPassword: builder.mutation({
                    query:({password, newPassword}) => ({
                        document: `mutation changePassword($password: String!, $newPassword: String!){
                            changePassword(password:$password, newPassword: $newPassword)
                          }`, variables: {password, newPassword}
                    })
                }),
                findPlaylist: builder.query({
                    query:({playlistName}) => ({
                        document:`query findPlaylist($query: String){
                            PlaylistFind(query: $query){
                                _id
                                owner{login}
                                name
                                tracks{id3 {title, artist}}
                            }
                        }`, variables: {query: JSON.stringify([{name:`/${playlistName}/`}])}
                    })
                }), 
                userRegistration: builder.mutation({
                    query:({login, password}) => ({
                        document: `mutation register($login:String!, $password: String!){
                            createUser(login:$login, password: $password){
                              login
                            }
                          }`, variables: {login,password}
                    })
                }),
                newTrack: builder.mutation({
                    query:({id}) => ({
                        document: `mutation addTrack($id:ID){
                            TrackUpsert(track:{_id: $id}){
                                _id url id3{title, artist}
                            }
                        }`, variables: {id}
                    })
                }),
                newPlaylist: builder.mutation({
                    query:({name, description, tracks}) => ({
                        document:`mutation addPlaylist($name: String, $description: String, $tracks:[TrackInput]){
                            PlaylistUpsert(playlist:{name:$name, description:$description, tracks:$tracks}){
                                _id owner{login} name description tracks{_id, id3{title, artist}}
                            }
                        }`, variables:{name, description, tracks}
                    })
                }), 
                findMyPlaylists: builder.query({
                    query:({_id}) => ({
                        document: `query findPlaylist($query: String){
                            PlaylistFind(query:$query){
                              _id
                              owner{login}
                              name
                              tracks{_id url id3 {title, artist}}
                        }
                    }`, variables:{query: JSON.stringify([{___owner: _id}])}
                    })
                })
    })
})

export default api;