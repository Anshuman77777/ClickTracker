import { RefreshCcw } from 'lucide-react'
import React, { useEffect, useState,useRef } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { useDeviceType } from '../util/useDeviceType';
import { saveClick } from '../apis/click-event';

function Gate() {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const referrer = queryParams.get('ref');
  const deviceType = useDeviceType();

  const [redirectUrl, setRedirectUrl] = useState(null);
  const hasCalled = useRef(false); // prevents double init

  useEffect(() => {
    if (!id || !deviceType || !referrer) return;

    if (hasCalled.current) return;
    hasCalled.current = true;

    const init = async () => {
      const url = await saveClick({
        urlID: id,
        device: deviceType,
        referrer: referrer
      });
      setRedirectUrl(url);
    };

    init();
  }, [id, deviceType, referrer]);

  useEffect(() => {
    if (redirectUrl && redirectUrl !== 'Failed') {
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <RefreshCcw className="animate-spin m-5" />
      <h1>Redirecting! {deviceType}</h1>
    </div>
  );
}

export default Gate;