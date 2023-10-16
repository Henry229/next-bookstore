'use client';
import Modal from '@/components/ui/modal';

export default function SetupPage() {
  return (
    <div className='p-4'>
      <Modal title='Test' description='Test Desc' isOpen onClose={() => {}}>
        children
      </Modal>
    </div>
  );
}