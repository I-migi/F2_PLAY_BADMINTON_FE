import { Textarea } from "@/components/ui/textarea";
import { forwardRef } from "react";

interface ClubInputDescriptionProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  description?: string;
}

const ClubInputDescription = forwardRef<
  HTMLTextAreaElement,
  ClubInputDescriptionProps
>((props, ref) => {
  const { description } = props;
  return (
    <div className="flex flex-col w-full h-full">
      <Textarea
        className="rounded-md w-full h-full outline-none border border-gray-300 text-gray-600 p-1 overflow-scroll resize-none"
        placeholder="동호회 소개를 입력하세요"
        ref={ref}
        {...props}
        defaultValue={description}
      />
    </div>
  );
});

export default ClubInputDescription;
