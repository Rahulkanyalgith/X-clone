import { grapghqlClient } from "@/clients/api";
import Twitterlayout from "@/components/FeedCard/Layout/X-Layout";
import FeedCard from "@/components/FeedCard/page";
import { Tweet, User } from "@/gql/graphql";
import { getUserByIdQuery } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsArrowLeftShort } from "react-icons/bs";


interface ServerProps {
  userInfo?: User;
}

const userProfilePage: NextPage = (props) => {
  
  const router =useRouter();


  return (
    <div>
      <Twitterlayout>
        <div>
          <nav className="flex items-center gap-3 py-3 px-3">
            <BsArrowLeftShort className="text-4xl" />
            <div>
              <h1 className="text-2xl font-bold">Rahul kanyal</h1>
              <h1 className="text-md font-bold text-slate-500">{props.userInfo?.tweets?.length}</h1>
            </div>
          </nav>
          <div className="p-4">
            {props.userInfo?.profileImageURL && (
              <Image
                src={props.userInfo?.profileImageURL}
                alt="user-image"
                className="rounded-full"
                width={200}
                height={200}
              />
            )}
            <h1 className="text-2xl font-bold mt-5">Rahul kanyal</h1>
          </div>
          <div>
            {props.userInfo?.tweets?.map((tweet : any) => (
              <FeedCard data={tweet as Tweet} key={tweet?.id} />
            ))}
          </div>
        </div>
      </Twitterlayout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ServerProps> = async (
  context
) => {
  const id = context.query.id as string | undefined;

  if (!id) return { notFound: true, props: { userInfo: undefined } };

  const userInfo = await grapghqlClient.request(getUserByIdQuery, { id });

  if (!userInfo?.getUserById) return { notFound: true };

  return {
    props: {
      userInfo: userInfo.getUserById as User,
    },
  };
};




export default userProfilePage;