import { X } from "lucide-react";
import Icons from "../common/Icons";
import { IconsImages } from "@/src/assets/icons";

export default function PopupAvatar() {

    return (
        <div className="flex flex-col w-90 bg-gradient-background-1 mr-50 px-4 py-2.5">
            <div className="flex w-full justify-between items-center">
                <p className="text-sm text-text-secondary leading-8 font-bold">Sign in or create account</p>
                <X size={20} />
            </div>

            <div className="flex w-full gap-3 items-center justify-center">
                <div className="w-full h-11.5 flex justify-center items-center cursor-pointer ring-[0.5px] ring-text rounded-xl">
                    <Icons
                        src={IconsImages['google-color']}
                        width={20}
                        height={20}
                    />
                </div>
                <div className="w-full h-11.5 flex justify-center items-center cursor-pointer ring-[0.5px] ring-text rounded-xl">

                    <Icons
                        src={IconsImages['facebook-color']}
                        width={20}
                        height={20}
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 w-full h-4 mt-1 ">
                <p className="m-0 h-[0.5px] w-full bg-text-quara" />
                <p className="m-0 text-xs leading-4 font-bold text-text-quara">OR</p>
                <p className="m-0 h-[0.5px] w-full bg-text-quara" />
            </div>

            <div className="flex w-full">

            </div>
        </div>
    )
}  