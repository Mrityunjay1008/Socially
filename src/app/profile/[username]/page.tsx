import { getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing } from '@/actions/profile.action'
import ProfilePage from '@/components/ProfilePage';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({params}:{params:{username:string}}) {
    const { username } = await params
    const user = await getProfileByUsername(username)
    if(!user) return;
    return {
        title:`${user.username??user.name}`,
        description:user.bio || `Check out ${user.name}'s profile.`,
    }
}

const page = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params

  const user = await getProfileByUsername(username)

  if(!user) notFound()

  const [posts,likedPosts,isCurrentUserFollowing] = await Promise.all([getUserPosts(user.id),getUserLikedPosts(user.id),isFollowing(user.id)])


  return (
    <ProfilePage
    user={user}
    posts={posts}
    likedPosts={likedPosts}
    isCurrentUserFollowing={isCurrentUserFollowing}
    />
  )
}
export default page
