import React from "react";

const Footer = () => {
    return (
        <div className="flex justify-between items-center text-[#D8D8D8] bottom-0 max-lg:items-start max-sm:flex-col max-sm:gap-y-6 pt-20">
            <div className="flex gap-x-6 items-center max-sm:gap-x-2">
                <p>Powered By</p>
                <p className="inline-flex items-center">
                    <img className="opacity-60 w-7 mr-2 max-sm:hidden" src="/wLogo.svg" />
                    Wormhole
                </p>
            </div>
            <div className="flex gap-x-12 items-center max-lg:flex-col max-lg:items-start max-lg:gap-y-4">
                <a href="https://www.superteam.fun" target="_blank">
                    www.superteam.fun
                </a>
                <a href="https://www.solanatourism.com" target="_blank">
                    www.solanatourism.com
                </a>
                <p>
                    Built and Maintained by{" "}
                    <a className="text-[#B131FF]" href="https://twitter.com/yashhsm" target="_blank">
                        @yashhsm
                    </a>{" "}
                    and{" "}
                    <a className="text-[#B131FF]" href="https://twitter.com/_kanishq" target="_blank">
                        @_kanishq
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
