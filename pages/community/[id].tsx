import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Answer, Post, User } from ".prisma/client";
import { cls } from "@libs/client/utils";
import useMutation from "@libs/client/useMutation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface AnswerWithUser extends Answer {
  user: User;
}

interface PostwithUser extends Post {
  user: User;
  answers: AnswerWithUser[];
  _count: {
    answers: number;
    Wonderings: number;
  };
}

interface PostResponse {
  ok: boolean;
  post: PostwithUser;
  isWondering: boolean;
}

interface AnswerForm {
  answer: string;
}

interface AnswerMutationResponse {
  ok: Boolean;
  response: Answer;
}

const CommunityPostDetail: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<AnswerForm>();

  const { data, mutate } = useSWR<PostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );

  const [wonder, { loading }] = useMutation(
    `/api/posts/${router.query.id}/wonder`
  );

  const [sendAnswer, { data: answerData, loading: answerLoading }] =
    useMutation<AnswerMutationResponse>(`/api/posts/${router.query.id}/answer`);

  const onWonderClick = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        post: {
          ...data.post,
          _count: {
            ...data.post._count,
            Wonderings: data.isWondering
              ? data.post._count.Wonderings - 1
              : data.post._count.Wonderings + 1,
          },
        },
        isWondering: !data.isWondering,
      },
      false
    );
    if (!loading) {
      wonder({});
    }
  };

  const onValid = (data: AnswerForm) => {
    if (answerLoading) return;
    sendAnswer(data);
  };

  useEffect(() => {
    if (answerData && answerData.ok) {
      reset();
      mutate();
    }
  }, [answerData, reset, mutate]);

  return (
    <Layout canGoBack>
      <div className="pt-2">
        <span className="ml-4 px-2 py-1 text-xs rounded-full bg-slate-200">
          동네질문
        </span>
        <div className="px-4 border-b-[1px] pb-2 flex mt-3 space-x-3 items-center">
          <div className="w-12 h-12 bg-slate-400 rounded-full" />
          <div className="flex-col space-y-1 justify-center ">
            <p className="text-gray-800 text-sm font-semibold">
              {data?.post.user.name}
            </p>
            <p className="text-xs text-gray-700">View profile &rarr;</p>
          </div>
        </div>
        <div className="pt-2">
          <span className="block border-b-[1px] pb-2 px-4">
            <span className="text-orange-500">Q.</span> {data?.post.question}
          </span>
          <div className="flex space-x-4 pb-3 px-4 border-b-2 pt-2">
            <button
              onClick={onWonderClick}
              className={cls(
                "flex items-center space-x-1",
                data?.isWondering ? "text-teal-500" : ""
              )}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 {data?.post._count.Wonderings}</span>
            </button>
            <span className="flex items-center space-x-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>답변 {data?.post._count.answers}</span>
            </span>
          </div>
        </div>

        {/* <div className="px-4 py-6">
          <div className="flex items-start space-x-2">
            <div className="w-10 h-10 bg-slate-300 rounded-full" />
            <div className="flex-col">
              <span className="block font-bold text-gray-900">steve jebs</span>
              <span className="block text-gray-600 text-sm">2시간 전</span>
              <p>The best mandu restaurant is the one next to my house.</p>
            </div>
          </div>
        </div> */}
        <div className="px-4 my-5 space-y-5">
          {data?.post.answers.map((answer) => (
            <div key={answer.id} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-slate-200 rounded-full" />
              <div>
                <span className="text-sm block font-medium text-gray-700">
                  {answer.user.name}
                </span>
                <span className="text-xs text-gray-500 block ">
                  {/* {Date.parse(answer.createdAt.toString())} */}
                  2시간전
                </span>
                <p className="text-gray-700 mt-2">{answer.answer} </p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onValid)} className="px-4 flex-col">
          {/* <textarea
            className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
            rows={4}
            placeholder="Answer this question!"
          /> */}
          <TextArea
            register={register("answer", { required: true, minLength: 5 })}
            name="reply"
            placeholder="Answer this question!"
          />
          <Button text={answerLoading ? "Loading..." : "Reply"} />
        </form>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
