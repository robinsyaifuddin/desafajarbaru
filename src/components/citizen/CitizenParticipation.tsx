
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Vote, Users, Calendar, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CitizenParticipation = () => {
  const { toast } = useToast();
  const [votedPolls, setVotedPolls] = useState(new Set());

  const activePolls = [
    {
      id: 1,
      title: 'Prioritas Pembangunan Desa 2024',
      description: 'Pilih prioritas pembangunan yang menurut Anda paling penting untuk desa kita',
      endDate: '2024-02-15',
      totalVoters: 125,
      options: [
        { text: 'Perbaikan Jalan', votes: 45, percentage: 36 },
        { text: 'Pembangunan Posyandu', votes: 35, percentage: 28 },
        { text: 'Fasilitas Olahraga', votes: 25, percentage: 20 },
        { text: 'Sistem Drainase', votes: 20, percentage: 16 }
      ]
    },
    {
      id: 2,
      title: 'Waktu Pelaksanaan Gotong Royong',
      description: 'Kapan waktu yang paling tepat untuk kegiatan gotong royong bulanan?',
      endDate: '2024-02-10',
      totalVoters: 89,
      options: [
        { text: 'Minggu Pagi (07:00-10:00)', votes: 35, percentage: 39 },
        { text: 'Sabtu Sore (15:00-18:00)', votes: 30, percentage: 34 },
        { text: 'Minggu Sore (15:00-18:00)', votes: 24, percentage: 27 }
      ]
    }
  ];

  const completedSurveys = [
    {
      id: 1,
      title: 'Survei Kepuasan Layanan Desa',
      completedDate: '2024-01-20',
      status: 'Selesai',
      result: 'Hasil telah dipublikasikan'
    },
    {
      id: 2,
      title: 'Evaluasi Program Bantuan Sosial',
      completedDate: '2024-01-15',
      status: 'Selesai',
      result: 'Sedang dianalisis'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Musyawarah Desa Perencanaan APBD 2024',
      date: '2024-02-05',
      time: '09:00 WIB',
      location: 'Balai Desa Fajar Baru',
      description: 'Pembahasan rencana anggaran pembangunan desa untuk tahun 2024'
    },
    {
      id: 2,
      title: 'Sosialisasi Program Desa Digital',
      date: '2024-02-12',
      time: '14:00 WIB',
      location: 'Aula Desa',
      description: 'Pengenalan sistem digital untuk meningkatkan pelayanan publik'
    }
  ];

  const handleVote = (pollId, optionIndex) => {
    if (votedPolls.has(pollId)) {
      toast({
        title: "Sudah Memberikan Suara",
        description: "Anda sudah memberikan suara untuk polling ini.",
        variant: "destructive",
      });
      return;
    }

    setVotedPolls(prev => new Set([...prev, pollId]));
    toast({
      title: "Suara Berhasil Dikirim",
      description: "Terima kasih atas partisipasi Anda dalam polling ini.",
    });
  };

  const isVoted = (pollId) => votedPolls.has(pollId);

  return (
    <div className="space-y-6">
      {/* Active Polls */}
      <Card className="p-6">
        <div className="flex items-center mb-6">
          <Vote className="text-emerald-600 mr-3" size={24} />
          <h3 className="text-xl font-semibold text-gray-800">Polling & Survei Aktif</h3>
        </div>

        <div className="space-y-6">
          {activePolls.map((poll) => (
            <Card key={poll.id} className="p-6 border-2 border-emerald-100">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2">{poll.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{poll.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        {poll.totalVoters} suara
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        Berakhir: {poll.endDate}
                      </div>
                    </div>
                  </div>
                  {isVoted(poll.id) && (
                    <Badge className="bg-green-500 text-white mt-2 md:mt-0">
                      <CheckCircle size={14} className="mr-1" />
                      Sudah Memilih
                    </Badge>
                  )}
                </div>

                <div className="space-y-3">
                  {poll.options.map((option, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{option.text}</span>
                        <span className="text-sm text-gray-500">{option.percentage}%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Progress value={option.percentage} className="flex-1" />
                        {!isVoted(poll.id) && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleVote(poll.id, index)}
                            className="hover:bg-emerald-50 hover:border-emerald-500"
                          >
                            Pilih
                          </Button>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{option.votes} suara</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Upcoming Events */}
      <Card className="p-6">
        <div className="flex items-center mb-6">
          <Calendar className="text-emerald-600 mr-3" size={24} />
          <h3 className="text-xl font-semibold text-gray-800">Kegiatan Mendatang</h3>
        </div>

        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="p-4 border-l-4 border-l-blue-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                  <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <div className="mt-3 md:mt-0">
                  <Button variant="outline" size="sm" className="hover:bg-emerald-50">
                    Daftar Hadir
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Completed Surveys */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Riwayat Partisipasi</h3>
        
        <div className="space-y-4">
          {completedSurveys.map((survey) => (
            <Card key={survey.id} className="p-4 border-l-4 border-l-green-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">{survey.title}</h4>
                  <p className="text-sm text-gray-600">Selesai pada: {survey.completedDate}</p>
                  <p className="text-sm text-gray-500">{survey.result}</p>
                </div>
                <div className="flex items-center space-x-3 mt-3 md:mt-0">
                  <Badge className="bg-green-500 text-white">
                    {survey.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Lihat Hasil
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CitizenParticipation;
